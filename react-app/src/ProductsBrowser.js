import React, { useState, useEffect} from 'react';
import { useSelector} from 'react-redux';
import NavBar from './NavBar';
import ProductGrid from './ProductGrid';
import Figure from 'react-bootstrap/Figure'
import ProductsPage from './ProductsPage';



const ProductsBrowser = () => {


    //const {accessoriesList, clothingList, bicyclesList } = useContext(ProductListsContext);



    // const accessoriesLoaded = useSelector(state => state.accessories.accessoriesLoaded);
    // const bicyclesLoaded = useSelector(state=> state.bicycles.bicyclesLoaded);
    // const clothingLoaded = useSelector(state=> state.clothing.clothingLoaded);
    const [productsSelected, setProductsSelected] = useState('');
    const [featuredBicycleURL, setFeaturedBicycleURL] = useState();
    const [featuredClothingURL, setFeaturedClothingURL] = useState();
    const [featuredAccessoryURL, setFeaturedAccessoryURL] = useState();

    const accessoriesList = useSelector(state => state.accessories.accessoryList);
    const bicyclesList = useSelector(state => state.bicycles.bicycleList);
    const clothingList = useSelector(state => state.clothing.clothingList);

    // console.log("Products Browser:  ", accessoriesList);
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

    }, [bicyclesList, accessoriesList, clothingList]);


    const handleClick = (e) => {
        setProductsSelected(e.target.id);
    }

    if (productsSelected) {
        console.log("Products selected:  ", productsSelected);
        return <ProductsPage productsSelected={productsSelected}></ProductsPage>
    } else {
         console.log("ProductsBrowser: ", bicyclesList);
        return (
            <>
                <NavBar></NavBar>
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
}

export default ProductsBrowser;
