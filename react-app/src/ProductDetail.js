import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from './SearchBar';
import UserReview from './UserReview';
import ProductReviewInput from './ProductReviewInput';
import OrderForm from './OrderForm';
import ProductHeadline from './ProductHeadline';
import ProductReviewSignup from './ProductReviewSignup';
import {
    getSelectedProductInfo,
    setSelectedProductType,
    setSelectedProductId,
    setColorsAvail,
    setSizesAvail,
    setFramesAvail,
    setGendersAvail,
    setProductName,
    setProductPhotoURL,
    setProductPrice,
    setProductDescription,
    setInventoryAvail, } from './store/selectedProduct';
import { baseUrl } from './config';


const ProductDetail = (props) => {
   const [userReviews, setUserReviews] = useState([]);
   const productDetail = props.location.state.props;
   const [productId, ] = useState(productDetail.id);
   const userId = useSelector(state => state.authentication.userId);
   const [,setProductHeadline] = useState();
   //const [productPrice, setProductPrice] = useState();
   const productPrice = useSelector(state => state.selectedProduct.price);
   const [, setProductDescription] = useState();
   const [productRating, setProductRating] = useState();
   const dispatch = useDispatch();
   //console.log("Product Detail:  Received props:  ", productDetail);

    useEffect(() => {

        if (!productId) {
            console.log("Product ID is not set ...");
        } else {
                setProductHeadline(productDetail.name);
                setProductPrice(productDetail.price);
                setProductDescription(productDetail.description);

            (async() => {
                const response = await fetch(`${baseUrl}/reviewsRatings/reviews/${productId}`);

                 if (response.ok) {
                     const resp = await response.json();
                     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                     for (let i = 0; i < resp.reviews.length; i++) {
                        const dateString = resp.reviews[i].postDate;
                        const event = new Date(dateString);
                        const newDateStr = event.toLocaleDateString(undefined, options)
                        resp.reviews[i].postDate = newDateStr;
                     }
                     const reviews = resp.reviews;
                    setUserReviews(reviews);
                 } else {
                     console.log("ProductDetail:  Errors fetching user reviews...");
                 }
            })();
            (async() => {
                const response = await fetch(`${baseUrl}/reviewsRatings/rating/${productId}`);
                if (response.ok) {
                    const resp = await response.json();
                    console.log("Rating received: ", resp.averageRating);
                    setProductRating(resp.averageRating);
                } else {
                    console.log("ProductDetail: Errors fetching avgRating");
                }
            })();
            (async() => {
                const productInfo = await getSelectedProductInfo(1);

                dispatch(setSelectedProductType(productInfo.type));
                dispatch(setSelectedProductId(productId));
                dispatch(setColorsAvail(productInfo.colorsAvail));
                dispatch(setSizesAvail(productInfo.sizesAvail));
                dispatch(setFramesAvail(productInfo.framesAvail));
                dispatch(setGendersAvail(productInfo.gendersAvail));
                dispatch(setProductName(productInfo.productName));
                dispatch(setProductPhotoURL(productInfo.photoURL));
                dispatch(setProductPrice(productInfo.price));
                dispatch(setProductDescription(productInfo.setProductDescription));
                dispatch(setInventoryAvail(productInfo.inventoryAvail));
            })();

    }
      }, [productId, productDetail.description, productDetail.name, productDetail.price]);


    return (
        <div>
            <SearchBar></SearchBar>
            <div style={{borderColor: "2px solid red", display:"flex", height: 'auto'}}>
                <div className="productDetail" style={{width:"60%"}} >
                    {/* <h2 style={{color: "white"}}>{productDetail.name}</h2> */}
                    <img src={productDetail.photoURL} style={{height: "400px"}} alt="product detail"></img>

                    {/* <p style={{color:"white"}}>{productDetail.description}</p> */}
                    <p>Product Reviews:  </p>
                    { userReviews.map( (review, idx) => <UserReview key={idx} productId={props.id} review={review}></UserReview>) }

                </div>
                <div className="productOrder" style={{display:"inline-block",width:"30%"}}>
                    <ProductHeadline productDetail={productDetail} productRating={productRating} productPrice={productPrice}></ProductHeadline>
                    <OrderForm productDetail={productDetail}></OrderForm>

                    {/* <ProductDescription></ProductDescription> */}
                </div>

            </div>
            { userId ?
            <ProductReviewInput productId={productId}></ProductReviewInput>
            : <ProductReviewSignup></ProductReviewSignup>}
        </div>
    )
}

export default ProductDetail;
