import React from 'react';
import SearchBar from './SearchBar';

const ProductDetail = (props) => {
   // const { productDetail } = props;
    console.log("Received props:  ", props);
    //console.log("Props received in product detail page:  ", productDetail);
    return (
        <div>
            <SearchBar></SearchBar>

            <h4>Product Detail page!  Selected: </h4>

        </div>
    )
}

export default ProductDetail;
