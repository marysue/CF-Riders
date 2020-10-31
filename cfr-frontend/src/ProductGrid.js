import React, { useState }  from 'react';
import { useSelector } from 'react-redux';

const ProductGrid = (props) => {
    const bicycleList = useSelector(state => state.bicycles.bicycleList);
    const accessoryList = useSelector(state => state.accessories.accessoryList);
    const clothingList = useSelector(state => state.clothing.clothingList);

    let listItemArr = [];
    if (bicycleList) {
        console.log(bicycleList);
        console.log(bicycleList[0]);
        console.log(bicycleList[0].photoURL);
    }

    switch (props.category) {
        case "Bicycles" : {
            listItemArr = bicycleList;
            break;
        }
        case "Accessories" : {
            listItemArr = accessoryList;
            break;
        }
        case "Clothing" : {
            listItemArr = clothingList;
            break;
        }
        default:
            return;
    };

    if (listItemArr === undefined) {
        console.log(`${props.category} was undefined...`);
        return null;
    }
    return (
        <>
            <div>
                <h2>Recommended in {props.category}</h2>
                <div className="productGrid">
                    <div className="productItem">
                        <img src={listItemArr[0].photoURL}></img>
                    </div>
                    <div className="productItem">
                        <img src={listItemArr[1].photoURL}></img>

                    </div>
                    <div className="productItem">
                        <img src={listItemArr[2].photoURL}></img>
                    </div>
                    <div className="productItem">
                        <img src={listItemArr[3].photoURL}></img>

                    </div>
                    <div className="productItem">
                        <img src={listItemArr[4].photoURL}></img>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ProductGrid;
