import React, { useEffect, useState } from 'react';


const ProductHeadline = ({productDetail, productRating, productPrice}) => {
   // const { productDetail } = props;
   //const productDetail = props.location.state.props;
    //console.log("Props received in product detail page:  ", productDetail);
    const [stars, setStars] = useState([]);
    //console.log("Received product rating:  ", productRating);

    useEffect ( () => {
        const starsArr = []
        for (let i = 0; i < productRating; i++) {
            starsArr.push(<i className="fas fa-star"></i>);
        }
        setStars(starsArr);
        // console.log("Contents of stars:  ", stars);
        // console.log("productjRating:  ", productRating);
    }, [productRating])
    console.log("ProductDetail :  ", productDetail);
    return (
        <div >
            <h2 style={{color: "white"}}>{productDetail.productName}</h2>
            <p>{stars}</p>
            <p>{productDetail.description}</p>
            <p>Price:  ${productDetail.price}</p>
        </div>
    )
}

export default ProductHeadline;
