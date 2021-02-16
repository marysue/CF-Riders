import React, { useEffect, useState } from 'react';


const ProductHeadline = ({productDetail, productRating, productPrice}) => {
   const [stars, setStars] = useState([]);

    useEffect ( () => {
        const starsArr = []
        for (let i = 0; i < productRating; i++) {
            starsArr.push(<i className="fas fa-star"></i>);
        }
        setStars(starsArr);
   }, [productRating])

   return (
        <div >
            <h2>{productDetail.productName}</h2>
            <p>{stars}</p>
            <p>{productDetail.description}</p>
            <p>Price:  ${productDetail.price}</p>
        </div>
    )
}

export default ProductHeadline;
