import React from 'react';
import SearchBar from './SearchBar';
import UserReviewHead from './UserReviewHead';
import UserReview from './UserReview';
import ProductReviewInput from './ProductReviewInput';
import OrderForm from './OrderForm';
import ProductHeadline from './ProductHeadline';
import ProductDescription from './ProductDescription';
import ProductRating from './ProductRating';

const ProductDetail = (props) => {
   // const { productDetail } = props;
   const productDetail = props.location.state.props;
    console.log("Received props:  ", productDetail);
    //console.log("Props received in product detail page:  ", productDetail);
    return (
        <div>
            <SearchBar></SearchBar>
            <div style={{borderColor: "2px solid red", display:"flex", height: 'auto'}}>
                <div className="productDetail" style={{width:"60%"}} >
                    <h2 style={{color: "white"}}>{productDetail.name}</h2>
                    <img src={productDetail.photoURL} style={{height: "400px"}} alt="product detail"></img>

                    <p style={{color:"white"}}>{productDetail.description}</p>
                    <UserReviewHead productId={props.id}></UserReviewHead>
                    <UserReview></UserReview>

                </div>
                <div className="productOrder" style={{display:"inline-block",width:"30%"}}>
                    <ProductHeadline></ProductHeadline>
                    <OrderForm></OrderForm>
                    <ProductDescription></ProductDescription>
                </div>

            </div>
            <ProductReviewInput></ProductReviewInput>
        </div>
    )
}

export default ProductDetail;
