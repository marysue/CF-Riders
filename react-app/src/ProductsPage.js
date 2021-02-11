import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Figure from 'react-bootstrap/Figure';
import { Redirect } from 'react-router-dom';
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
    setInventoryAvail, } from './store/selectedProduct'


const ProductsPage = () => {
    console.log("ProductsPage");
    const bicycleArr = useSelector(state => state.bicycles.bicycleList);
    const accessoryArr = useSelector(state => state.accessories.accessoryList);
    const clothingArr = useSelector(state => state.clothing.clothingList);
    const [productDetail, setProductDetail] = useState(undefined);
    const productId = useSelector(state => state.selectedProduct.productId);
    const dispatch = useDispatch();
    let listItemArr = undefined;

    const productType = useSelector(state => state.selectedProduct.productType);

    switch (productType) {
        case "Bicycles" : {
             listItemArr = bicycleArr;
            break;
        }
        case "Accessories" : {
             listItemArr = accessoryArr;
            break;
        }
        case "Clothing" : {
             listItemArr = clothingArr;
            break;
        }
        default : {
            listItemArr = undefined;
        }
    }


    useEffect( () => {
        if (productId) {
            // console.log("Found productDetail:  ", productDetail);
            const productInfo = getSelectedProductInfo(productId);
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

            console.log("ProductsPage:  productType: ", productType);

        }


    }, [])


    const handleClick = async(e) => {
        e.preventDefault();
        //If we have the item in our arrary, set the item to the target
        // console.log("Products Page: handleClick: e.target.id: ", e.target.id);
        const targetItem = parseInt(e.target.id);
        console.log("targetItem:  ", targetItem);
        let prodId = null;
        let prodDetail = null;
        //unexpected error on the following line.  Maybe listItemArr goes null? dunno!
        for (let i = 0; i < listItemArr.length; i++) {
            if (listItemArr[i].id === targetItem) {
                prodId = targetItem
                prodDetail = listItemArr[i]
            }
        }
        console.log("ProductsPage: ProductId: ", prodId);
        console.log("ProductsPage: productDetail: ", prodDetail);
        const productInfo = await getSelectedProductInfo(prodId);

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
        setProductDetail(prodDetail);
    }



    return (
        <>
            <div className="productGrid" onClick={handleClick}>
                {listItemArr.map( (item, idx) => {
                    const id = item.id;
                    const name = item.name;
                    const photoURL = item.photoURL;
                    const price = item.price.toFixed(2);
                    return (
                        <div className="productItem" key={id}>
                            <img id={item.id} key={id} src={photoURL} alt={productType}></img>
                            <Figure.Caption>{name}</Figure.Caption>
                            <span className="price">${price}</span>
                        </div>
                    )
                })};
            </div>
        </>
    );

};

export default ProductsPage;
