import React from 'react';
import ProductRating from './ProductRating';

const ProductReviewInput = (props) => {

    return (
        <>
            <div style={{border: "2px solid red", display:"inline-block", width:"60%"}}>
                <h2>Add your review: </h2>
                <p>Input box here...</p>
                <p>Save button here...</p>
            </div>
            <ProductRating></ProductRating>
        </>
    )
};

export default ProductReviewInput;
