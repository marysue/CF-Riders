import React from 'react';

const ProductHeadline = (props) => {
   // const { productDetail } = props;
   //const productDetail = props.location.state.props;
    //console.log("Props received in product detail page:  ", productDetail);

    return (
        <div style={{border: "2px solid red"}}>
            <h2 style={{color: "white"}}>Product Headline</h2>
            <p>Insert overall rating here</p>
            <p>Product detail information</p>
            <p>Price:  $3299</p>
        </div>
    )
}

export default ProductHeadline;
