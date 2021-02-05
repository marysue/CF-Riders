
import { useDispatch } from 'react-redux';


export default function useFetchProductInfo(productId) {
    const dispatch = useDispatch();
    let selectedProduct, productType, colorsAvail, gendersAvail, sizesAvail, framesAvail, productName, photoURL, price, description, inventory;

        // useEffect( () => {
        //     (async() => {
        //     console.log("Found productDetail:  ", productId);
        //     const productInfo = await getSelectedProductInfo(productId);

        //     dispatch(setSelectedProductType(productInfo.type));
        //     dispatch(setSelectedProductId(productId));

        //     dispatch(setColorsAvail(productInfo.colorsAvail));
        //     dispatch(setSizesAvail(productInfo.sizesAvail));
        //     dispatch(setFramesAvail(productInfo.framesAvail));
        //     dispatch(setGendersAvail(productInfo.gendersAvail));
        //     dispatch(setProductName(productInfo.productName));
        //     dispatch(setProductPhotoURL(productInfo.photoURL));
        //     dispatch(setProductPrice(productInfo.price));
        //     dispatch(setProductDescription(productInfo.setProductDescription));
        //     dispatch(setInventoryAvail(productInfo.inventoryAvail));
        //      productType = productInfo.type;
        //     colorsAvail = productInfo.colorsAvail;
        //     gendersAvail = productInfo.gendersAvail;
        //     sizesAvail = productInfo.sizesAvail;
        //     framesAvail = productInfo.framesAvail;
        //     productName = productInfo.productName;
        //     photoURL = productInfo.photoURL;
        //     price = productInfo.price;
        //     description = productInfo.description;
        //     inventory = productInfo.inventory;
            // })();
    // }, []);

    return {
        productId,
        productType,
        colorsAvail,
        gendersAvail,
        sizesAvail,
        framesAvail,
        productName,
        photoURL,
        price,
        description,
        inventory,
    };
}
