import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from './SearchBar';
import ProductGrid from './ProductGrid';
import { baseUrl } from './config';
import { setBicycleList, setBicyclesLoaded } from './store/bicycles';
import { setClothingList, setClothingLoaded } from './store/clothing';
import { setAccessoryList, setAccessoriesLoaded } from './store/accessories';



const ProductsBrowser = (props) => {
    const dispatch = useDispatch();
    const accessoriesLoaded = useSelector(state => state.accessories.accessoriesLoaded);
    const bicyclesLoaded = useSelector(state=> state.bicycles.bicyclesLoaded);
    const clothingLoaded = useSelector(state=> state.clothing.clothingLoaded);

    const loadBicycleStore = async() => {
        const response = await fetch(`${baseUrl}/bicycles/bicyclesList`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
          });
          if (response.ok) {
            const { bicyclesList } = await response.json();
            dispatch(setBicycleList(bicyclesList));
            console.log("Setting bicyclesLoaded to true ...");
            dispatch(setBicyclesLoaded(true));
            console.log("Bicycles are now loaded");
          }

    };
    useEffect ( () => {
        if (!bicyclesLoaded) {
            loadBicycleStore();
        }
        if (!accessoriesLoaded) {
            loadAccessoriesStore();
        }
        if (!clothingLoaded) {
            loadClothingStore();
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const loadAccessoriesStore = async() => {
        const response = await fetch(`${baseUrl}/accessories/accessoriesList`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
          });
          if (response.ok) {
            const { accessoriesList } = await response.json();
            dispatch(setAccessoryList(accessoriesList));
            dispatch(setAccessoriesLoaded(true));
          }
    };

    const loadClothingStore = async() => {
        const response = await fetch(`${baseUrl}/clothing/clothingList`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
          });
          if (response.ok) {
            const { clothingList } = await response.json();
            dispatch(setClothingList(clothingList));
            dispatch(setClothingLoaded(true));
          }
    }

    return (
        <>
            <SearchBar></SearchBar>
            <div className="productBanner">
                <div className="photoSpread">
                    <div className="productPhoto">
                    </div>
                    <div className="productPhoto">
                    </div>
                    <div className="productPhoto">
                    </div>
                </div>
            </div>
           <ProductGrid category={"Bicycles"}></ProductGrid>
           <ProductGrid category={"Clothing"}></ProductGrid>
           <ProductGrid category={"Accessories"}></ProductGrid>
        </>


    );
}

export default ProductsBrowser;
