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
    setInventoryAvail, } from './store/selectedProduct';


const ProductsPage = (props) => {
    console.log("received props:  ", props);
    const bicycleArr = useSelector(state => state.bicycles.bicycleList);
    const accessoryArr = useSelector(state => state.accessories.accessoryList);
    const clothingArr = useSelector(state => state.clothing.clothingList);
    const [productDetail, setProductDetail] = useState(undefined);
    const [productId, setProductId] = useState();
    const dispatch = useDispatch();
    let listItemArr = undefined;
    let listItemType;
    console.log("ProductId: ", productId);


    useEffect( () => {
        if (productId) {
            console.log("Found productDetail:  ", productDetail);
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
        }
    }, [productId])
    switch (props.productSelected) {
        case "Bicycles" : {
             listItemArr = bicycleArr;
             listItemType = "Bicycles"
            break;
        }
        case "Accessories" : {
             listItemArr = accessoryArr;
             listItemType = "Accessories"
            break;
        }
        case "Clothing" : {
             listItemArr = clothingArr;
             listItemType = "Clothing";
            break;
        }

        default : {
            listItemArr = undefined;
            listItemType = undefined;
        }
    }


    const handleClick = (e) => {
        e.preventDefault();
        const targetItem = parseInt(e.target.id);
        const prodDetail = listItemArr.filter( item => {
            const thisItem = parseInt(item.id);
            if (thisItem === targetItem) return item;
        });
        console.log("Clicked product:  ", prodDetail[0]);
        setProductDetail(prodDetail[0]);
        //setProductId(prodDetail[0].id);

    }


    if (listItemArr === undefined) {
        console.log("listItemArr is undefined...");
        return
    } else if (productDetail) {
        console.log("Should be redirecting to product detail now ...");
        return ( <Redirect
            to={{
                pathname: "/productDetail",
               state: { props: productDetail}
            }}
            />)
    //    return ( <ProductDetail props={productDetail}></ProductDetail> );
    } else {
        console.log("redrawing productGrid...");
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
                            <img id={id-idx} key={id} src={photoURL} alt={listItemType}></img>
                            <Figure.Caption>{name}</Figure.Caption>
                            <span className="price">${price}</span>
                        </div>
                    )
                })};
            </div>
        </>
    );

}};

export default ProductsPage;
