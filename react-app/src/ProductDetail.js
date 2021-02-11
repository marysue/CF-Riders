import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserReview from './UserReview';
import ProductReviewInput from './ProductReviewInput';
import AddToCartForm from './AddToCartForm';
import ProductHeadline from './ProductHeadline';
import ProductReviewSignup from './ProductReviewSignup';
import { setUserId } from './store/authentication';
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

    const productDetail = props.location.state.props;
    // console.log("props:  ", props);
    // console.log("props.location: ", props.location);
    // console.log("props.location.state:  ", props.location.state)
    // console.log("props.location.state.props: ", props.location.state.props);
    const [,setProductHeadline] = useState();
    const [userReviews, setUserReviews] = useState([]);
    const [productId, ] = useState(productDetail.id);
    const userId = useSelector(state => state.authentication.userId);

    const [userPosted, setUserPosted] = useState();
    console.log("***********ProductDetail***************");

    //console.log("productId:  ", props.location.state.props.productDetail.id);
    console.log("productDetail: ", props.location.state.props);
    console.log("props: ", props.location.state);


    //const [productPrice, setProductPrice] = useState();
    const productPrice = useSelector(state => state.selectedProduct.price);
    const [productRating, setProductRating] = useState();
    const dispatch = useDispatch();
    //console.log("Product Detail:  Received props:  ", productDetail);

    useEffect(() => {
        if (!userId) {
            dispatch(setUserId(window.localStorage.getItem("userId")));
        }
        if (!productId) {
            console.log("Warning!  ProductDetail: Product ID is not set ...");
        } else {
                setProductHeadline(productDetail.name);
                setProductPrice(productDetail.price);
                setProductDescription(productDetail.description);
                (async() => {

                    const response = await fetch(`${baseUrl}/reviewsRatings/reviews/${userId}/${productId}`);
                    response.ok ? setUserPosted(false) : setUserPosted(true);
                    console.log("userId: ", userId, "productId: ", productId);
                    console.log("Has user already posted?  ", response.status);
                })();

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
                    const productInfo = await getSelectedProductInfo(productId);

                    dispatch(setSelectedProductType(productInfo.type));
                    dispatch(setSelectedProductId(productId));
                    dispatch(setColorsAvail(productInfo.colorsAvail));
                    dispatch(setSizesAvail(productInfo.sizesAvail));
                    dispatch(setFramesAvail(productInfo.framesAvail));
                    dispatch(setGendersAvail(productInfo.gendersAvail));
                    dispatch(setProductName(productInfo.productName));
                    dispatch(setProductPhotoURL(productInfo.photoURL));
                    dispatch(setProductPrice(productInfo.price));
                    dispatch(setProductDescription(productInfo.productDescription));
                    dispatch(setInventoryAvail(productInfo.inventoryAvail));
                })();

    }
      }, [dispatch, userId, productId, productDetail.description, productDetail.name, productDetail.price]);


    return (
        <div>
            <div style={{display:"flex", height: 'auto'}}>
                <div className="productDetail" style={{width:"60%"}} >
                    {/* <h2 style={{color: "white"}}>{productDetail.name}</h2> */}
                    <img src={productDetail.photoURL} style={{height: "400px"}} alt="product detail"></img>

                    {/* <p style={{color:"white"}}>{productDetail.description}</p> */}
                    <h2>Product Reviews:  </h2>
                    { userReviews.map( (review, idx) => <UserReview key={idx} productId={props.id} review={review}></UserReview>) }

                </div>
                <div className="productOrder" style={{display:"inline-block",width:"30%"}}>
                    <ProductHeadline productDetail={productDetail} productRating={productRating} productPrice={productPrice}></ProductHeadline>

                    { userId ?
                    <AddToCartForm productDetail={productDetail}></AddToCartForm> : <div><b>To order a product, please log in.</b></div>}


                </div>

            </div>
            {/* { userId ?
            <ProductReviewInput productId={productId}></ProductReviewInput>
            : <ProductReviewSignup></ProductReviewSignup>} */}
            { userId && !userPosted ? <ProductReviewInput productDetail={productDetail} productId={productId}></ProductReviewInput>
                     : null }
            { !userId ?  <ProductReviewSignup></ProductReviewSignup> : null}
        </div>
    )
}

export default ProductDetail;
