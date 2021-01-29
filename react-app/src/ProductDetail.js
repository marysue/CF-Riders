import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import SearchBar from './SearchBar';
import UserReview from './UserReview';
import ProductReviewInput from './ProductReviewInput';
import OrderForm from './OrderForm';
import ProductHeadline from './ProductHeadline';
import ProductDescription from './ProductDescription';
import ProductReviewSignup from './ProductReviewSignup';

import { baseUrl } from './config';


const ProductDetail = (props) => {
   const [userReviews, setUserReviews] = useState([]);
   const productDetail = props.location.state.props;
   const [productId, setProductId] = useState(productDetail.id);
   const userId = useSelector(state => state.authentication.userId);
   const [productHeadline, setProductHeadline] = useState();
   const [productPrice, setProductPrice] = useState();
   const [productDescription, setProductDescription] = useState();
   const [productRating, setProductRating] = useState();

   console.log("Product Detail:  Received props:  ", productDetail);

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
                        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
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

    }
      }, [productId]);


    return (
        <div>
            <SearchBar></SearchBar>
            <div style={{borderColor: "2px solid red", display:"flex", height: 'auto'}}>
                <div className="productDetail" style={{width:"60%"}} >
                    {/* <h2 style={{color: "white"}}>{productDetail.name}</h2> */}
                    <img src={productDetail.photoURL} style={{height: "400px"}} alt="product detail"></img>

                    {/* <p style={{color:"white"}}>{productDetail.description}</p> */}
                    <p>Product Reviews:  </p>
                    { userReviews.map( (review) => <UserReview key={props.id} productId={props.id} review={review}></UserReview>) }

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
