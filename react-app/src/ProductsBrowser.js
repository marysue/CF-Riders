import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import ProductGrid from './ProductGrid';
import Figure from 'react-bootstrap/Figure'
import { setSelectedProductType } from './store/selectedProduct';

const ProductsBrowser = () => {


    //const {accessoriesList, clothingList, bicyclesList } = useContext(ProductListsContext);



    // const accessoriesLoaded = useSelector(state => state.accessories.accessoriesLoaded);
    // const bicyclesLoaded = useSelector(state=> state.bicycles.bicyclesLoaded);
    // const clothingLoaded = useSelector(state=> state.clothing.clothingLoaded);
    //const [productsSelected, setProductsSelected] = useState('');
    const [featuredBicycleURL, setFeaturedBicycleURL] = useState();
    const [featuredClothingURL, setFeaturedClothingURL] = useState();
    const [featuredAccessoryURL, setFeaturedAccessoryURL] = useState();

    const accessoriesList = useSelector(state => state.accessories.accessoryList);
    const bicyclesList = useSelector(state => state.bicycles.bicycleList);
    const clothingList = useSelector(state => state.clothing.clothingList);
    const productsSelected = useSelector(state => state.selectedProduct.productType);
    //console.log("Products Browser:  ", accessoriesList);
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
        console.log("ProductsBrowser: handleClick:  Setting productsSelected:  ", e.target.id);
        console.log("ProductsBrowser:  handleClick: settingSelectedProductType: ", e.target.id);
        dispatch(setSelectedProductType(e.target.id));
        const typesArr = ['Bicycles', 'Clothing', 'Accessories']
        console.log("ProductsBrowser: handleClick:  selectedProduct:  ", e.target.id);
        console.log("Is selected product in array?  ", typesArr.includes(e.target.id));
        if (typesArr.includes(e.target.id)) {
            console.log("ProductsBrowser: handleClick:  redirecting to /products for ", e.target.id);
            history.push({
                pathname: '/productsPage'
            })
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
