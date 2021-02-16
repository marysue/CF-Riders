import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import ProductGrid from './ProductGrid';
import Figure from 'react-bootstrap/Figure'
import { setSelectedProductType } from '../store/selectedProduct';

const ProductsBrowser = () => {

    const [featuredBicycleURL, setFeaturedBicycleURL] = useState();
    const [featuredClothingURL, setFeaturedClothingURL] = useState();
    const [featuredAccessoryURL, setFeaturedAccessoryURL] = useState();

    const accessoriesList = useSelector(state => state.accessories.accessoryList);
    const bicyclesList = useSelector(state => state.bicycles.bicycleList);
    const clothingList = useSelector(state => state.clothing.clothingList);
    const productsSelected = useSelector(state => state.selectedProduct.productType);
     const history = useHistory();
     const dispatch = useDispatch();

    useEffect ( () => {
        if (bicyclesList) {
            setFeaturedBicycleURL(bicyclesList[0].photoURL);
        }
        if (accessoriesList) {
            setFeaturedAccessoryURL(accessoriesList[0].photoURL);
        }
        if (clothingList) {
            setFeaturedClothingURL(clothingList[0].photoURL);
        }

    }, [bicyclesList, accessoriesList, clothingList, productsSelected]);

    const handleClick = (e) => {
        console.log("clicked...");
        dispatch(setSelectedProductType(e.target.id));
        switch (e.target.id) {
            case 'Bicycles':
                history.push({
                    pathname: '/bicycleProducts'
                })
                break;
            case 'Clothing':
                history.push({
                    pathname: '/clothingProducts'
                })
                break;
            case 'Accessories':
                history.push({
                    pathname: '/accessoryProducts'
                })
                break;
            default:
                break;
        }
     };


  return (

            <>
                <div className="productBanner">
                    <div className="photoSpread">
                        <div className="productPhoto" onClick={handleClick} >
                            <img id="Bicycles" src={featuredBicycleURL} alt="Bicycle"></img>
                            <Figure.Caption>Bicycles</Figure.Caption>
                        </div>
                        <div className="productPhoto" onClick={handleClick}>
                            <img id="Clothing" src={featuredClothingURL} alt="Clothing"></img>
                            <Figure.Caption>Clothing</Figure.Caption>
                        </div>
                        <div className="productPhoto" onClick={handleClick}>
                            <img id="Accessories" src={featuredAccessoryURL} alt="Accessory"></img>
                            <Figure.Caption>Accessories</Figure.Caption>
                        </div>
                    </div>
                </div>
                <h2 style={{color:"white"}}>Recommended in Bicycles</h2>
            <ProductGrid category={"Bicycles"} limit={5}> </ProductGrid>
            <h2 style={{color:"white"}}>Recommended in Clothing</h2>
            <ProductGrid category={"Clothing"} limit={5}> </ProductGrid>
            <h2 style={{color:"white"}}>Recommended in Accessories</h2>
            <ProductGrid category={"Accessories"} limit={5}></ProductGrid>
            </>


    )};

export default ProductsBrowser;
