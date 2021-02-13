import React from 'react';
import { useSelector } from 'react-redux';
import UserReview from './UserReview';
import ProductReviewInput from './ProductReviewInput';
import NewAddToCartForm from './newAddToCartForm';
import ProductHeadline from './ProductHeadline';
import ProductReviewSignup from './ProductReviewSignup';


const NewProductDetail = ({detail, userPosted, userReviews, productRating }) => {
    const userId = useSelector(state => state.authentication.userId)
    // console.log("NewProductDetail: userId: ", userId);
    return (
        <div>
            <div style={{display:"flex", height: 'auto'}}>
                <div className="productDetail" style={{width:"60%"}} >
                    <img src={detail.photoURL} style={{height: "400px"}} alt="product detail"></img>
                    <h2>Product Reviews:  </h2>
                    { userReviews && userReviews.length > 0 ?
                      userReviews.map( (review, idx) => <UserReview key={idx} productId={detail.id} review={review}></UserReview>)  : <h2>Be the first to write a review!</h2>}

                </div>
                <div className="productOrder" style={{ display:"inline-block", width:"30%"}}>
                    <ProductHeadline productDetail={detail} productRating={productRating} productPrice={detail.productPrice}></ProductHeadline>

                    { userId ?
                    <NewAddToCartForm productDetail={detail}></NewAddToCartForm> : <div><b>To order a product, please log in.</b></div>}
                </div>

            </div>
            { userId && !userPosted ? <ProductReviewInput productDetail={detail} productId={detail.id}></ProductReviewInput>
                     : null }
            { !userId ?  <ProductReviewSignup></ProductReviewSignup> : null}
        </div>
    )
}

export default NewProductDetail;
