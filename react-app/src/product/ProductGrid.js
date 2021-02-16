import React, { useState} from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Link} from 'react-router-dom';
import Figure from 'react-bootstrap/Figure'


const ProductGrid = (props) => {
    const bicycleList = useSelector(state => state.bicycles.bicycleList);
    const accessoryList = useSelector(state => state.accessories.accessoryList);
    const clothingList = useSelector(state => state.clothing.clothingList);
    const [productDetail, setProductDetail] = useState('');
    let listItemArr = [];
    let listItemType = '';

    switch (props.category) {
        case "Bicycles" : {
            if (props.limit > 0 && bicycleList !== undefined) {
                listItemArr = bicycleList.slice(0, props.limit);
            } else {
            listItemArr = bicycleList;
            }
            listItemType = 'bicycle';
            break;
        }
        case "Accessories" : {
            if (props.limit > 0 && accessoryList !== undefined) {
                listItemArr = accessoryList.slice(0, props.limit);
            } else {
                listItemArr = accessoryList;
            }
            listItemType = 'accessory';
            break;
        }
        case "Clothing" : {
            if (props.limit > 0 && clothingList !== undefined) {
                listItemArr = clothingList.slice(0, props.limit);
                //console.log("First if block: ListItemArr: ", listItemArr);
            } else {
                listItemArr = clothingList;
                //console.log("Second if block: ", listItemArr);
            }

            listItemType = 'clothing';
            break;
        }
        default:
            return;
    };

    const handleClick = (e) =>
    {
        const arrIdx = e.target.id.split("-")[1];
        setProductDetail(listItemArr[arrIdx]);
        // console.log("Clicked on e.target.id: ", e.target.id);
        // console.log("Redirect to product detail page for product:  ", productDetail); // listItemArr[arrIdx]);
    }

    if (listItemArr === undefined) {
        return null
    }
    if (productDetail) {
        console.log("Productdetail: ", productDetail);
        switch(listItemType) {
            case 'Bicycles' : {
                return (<Redirect to={{pathname: "/bicycleDetail/productDetail.id"}}></Redirect>)

            }
            case 'Clothing': {
                return (<Redirect to={{pathname: "/clothingDetail/productDetail.id"}}></Redirect>)

            }
            case 'Accessories': {
                return (<Redirect to={{pathname: "/accessoryDetail/productDetail.id"}}></Redirect>)
            }
            default:
        }

    } else {
        console.log("listItemArr[0]:  ", listItemArr[0]);
    return (
        <>
            <div>

                <div className="productGrid" onClick={handleClick}>
                     <Link className="productItem" style={{ textDecoration: 'none' }} className="productItem" to={`/bicycleDetail/${listItemArr[0].id}`} key={listItemArr[0].id}>
                            <img id={`${listItemType}-0`} src={listItemArr[0].photoURL} alt={props.category}></img>
                            <Figure.Caption>{listItemArr[0].name}</Figure.Caption>
                    </Link>
                    <Link className="productItem" style={{ textDecoration: 'none' }} className="productItem" to={`/bicycleDetail/${listItemArr[1].id}`} key={listItemArr[1].id}>
                        <img id={`${listItemType}-1`} src={listItemArr[1].photoURL} alt={props.category}></img>
                        <Figure.Caption>{listItemArr[1].name}</Figure.Caption>
                    </Link>
                      <Link className="productItem" style={{ textDecoration: 'none' }} className="productItem" to={`/bicycleDetail/${listItemArr[2].id}`} key={listItemArr[2].id}>
                        <img id={`${listItemType}-2`} src={listItemArr[2].photoURL} alt={props.category}></img>
                        <Figure.Caption>{listItemArr[2].name}</Figure.Caption>
                    </Link>
                      <Link className="productItem" style={{ textDecoration: 'none' }} className="productItem" to={`/bicycleDetail/${listItemArr[3].id}`} key={listItemArr[3].id}>
                        <img id={`${listItemType}-3`} src={listItemArr[3].photoURL} alt={props.category}></img>
                        <Figure.Caption>{listItemArr[3].name}</Figure.Caption>

                    </Link>
                      <Link className="productItem" style={{ textDecoration: 'none' }} className="productItem" to={`/bicycleDetail/${listItemArr[4].id}`} key={listItemArr[4].id}>
                        <img id={`${listItemType}-4`} src={listItemArr[4].photoURL} alt={props.category}></img>
                        <Figure.Caption>{listItemArr[4].name}</Figure.Caption>
                    </Link>
                </div>

            </div>
        </>
    )
                }
                }

export default ProductGrid;
