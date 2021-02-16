
import { baseUrl } from '../config';

export const SET_INVENTORY_AVAIL = 'products/selected/inventoryAvail';
export const SET_SELECTED_PRODUCT = 'products/selected/selectedProduct';
export const SET_SELECTED_PRODUCT_TYPE = 'products/selected/selectedProductType';
export const SET_SELECTED_PRODUCT_ID = 'products/selected/selectedProductId';
export const SET_COLORS_AVAIL = 'products/selected/colorsAvail';
export const SET_FRAMES_AVAIL = 'products/selected/framesAvail';
export const SET_SIZES_AVAIL = 'products/selected/sizesAvail';
export const SET_GENDERS_AVAIL = 'products/selected/gendersAvail';
export const SET_SELECTED_PRODUCT_NAME = 'products/selected/name';
export const SET_SELECTED_PRODUCT_PRICE = 'products/selected/price';
export const SET_SELECTED_PRODUCT_DESCRIPTION = 'products/selected/description';
export const SET_SELECTED_PRODUCT_PHOTOURL = 'products/selected/photoURL';
export const setSelectedProduct = selectedProduct => ({ type: SET_SELECTED_PRODUCT, selectedProduct });
export const setSelectedProductType = productType => ({ type: SET_SELECTED_PRODUCT_TYPE, productType });
export const setSelectedProductId = selectedProductId => ({ type: SET_SELECTED_PRODUCT_ID, selectedProductId});
export const setColorsAvail = colorsAvail => ({ type: SET_COLORS_AVAIL, colorsAvail });
export const setSizesAvail = sizesAvail => ({ type: SET_SIZES_AVAIL, sizesAvail });
export const setFramesAvail = framesAvail => ({ type: SET_FRAMES_AVAIL, framesAvail });
export const setGendersAvail = gendersAvail => ({ type: SET_GENDERS_AVAIL, gendersAvail });
export const setProductName = productName => ({type: SET_SELECTED_PRODUCT_NAME, productName });
export const setProductPrice = productPrice => ({ type: SET_SELECTED_PRODUCT_PRICE, productPrice });
export const setProductDescription = productDescription => ({ type: SET_SELECTED_PRODUCT_DESCRIPTION, productDescription });
export const setProductPhotoURL = photoURL => ({ type: SET_SELECTED_PRODUCT_PHOTOURL, photoURL });
export const setInventoryAvail = inventoryAvail => ({ type: SET_INVENTORY_AVAIL, inventoryAvail });
//reducer
export default function reducer(state = {}, action) {
    switch (action.type) {
      case SET_SELECTED_PRODUCT: {
          const newState = {...state};
          newState.selectedProduct = action.selectedProduct;
          return newState
      };

      case SET_SELECTED_PRODUCT_TYPE: {
          const newState = {...state};
          newState.productType = action.productType;
          return newState;
      }
      case SET_SELECTED_PRODUCT_ID: {
          const newState = {...state};
          newState.productId = action.selectedProductId;
          return newState;
      }
      case SET_COLORS_AVAIL: {
          const newState = { ...state};
          newState.colorsAvail = action.colorsAvail;
          return newState;
      }
      case SET_FRAMES_AVAIL: {
          const newState = {...state};
          newState.framesAvail = action.framesAvail;
          return newState;
      }
      case SET_SIZES_AVAIL: {
          const newState = {...state};
          newState.sizesAvail = action.sizesAvail;
          return newState;
      }
      case SET_GENDERS_AVAIL: {
          const newState = {...state};
          newState.gendersAvail = action.gendersAvail;
          return newState;
      }
      case SET_SELECTED_PRODUCT_NAME: {
        const newState = {...state};
        newState.name = action.productName;
        return newState;
      }
    case SET_SELECTED_PRODUCT_PRICE: {
        const newState = {...state};
        newState.price = action.productPrice;
        return newState;
    }
    case SET_SELECTED_PRODUCT_DESCRIPTION: {
        const newState = {...state};
        newState.description = action.productDescription;
        return newState;
    }
    case SET_SELECTED_PRODUCT_PHOTOURL: {
        const newState = {...state};
        newState.photoURL = action.photoURL;
        return newState;
    }
    case SET_INVENTORY_AVAIL: {
        const newState = {...state};
        newState.inventoryAvail = action.inventoryAvail;
        return newState;
    }
      default:
          return state;
    }
}

const objInArray = (obj, arr) => {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].value === obj.value) {
            return true;
        }
    }
    return false;
}

export const getSelectedProductInfo = async (productId) => {


    const response = await fetch(`${baseUrl}/inventory/${productId}`, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        const respArr = await response.json();
        const productInfo = respArr.productInfo;
        let tmpSizes = [];
        let tmpColors = [];
        let tmpGenders = [];
        let tmpFrames = [];

        for (let i = 0; i < productInfo.length; i++) {
            if (productInfo[i].size) {
                const sz = { value: productInfo[i].size, label: productInfo[i].size, isdisabled: false };
                if (!objInArray(sz, tmpSizes)) {tmpSizes.push(sz)}
            }
            if (productInfo[i].color) {
                const clr = { value: productInfo[i].color, label: productInfo[i].color, isdisabled: false };
                if (!objInArray(clr, tmpColors)) { tmpColors.push(clr) }
            }
            if (productInfo[i].frame) {
             const fr = { value: productInfo[i].frame, label: productInfo[i].frame, isdisabled: false };
             if (!objInArray(fr, tmpFrames)) { tmpFrames.push(fr)}
            }
            if (productInfo[i].gender) {
                const gdr = { value: productInfo[i].gender, label: productInfo[i].gender, isdisabled: false };
                if (!objInArray(gdr, tmpGenders)) { tmpGenders.push(gdr) }
            }
        }

        return { type: respArr.type, productId: productId, colorsAvail: tmpColors, sizesAvail: tmpSizes, framesAvail: tmpFrames, gendersAvail: tmpGenders,
                productName: respArr.name, photoURL: respArr.photoURL, price: respArr.price, description: respArr.description, inventoryAvail: respArr.productInfo }

     } else {
        //  console.log("Error retrieving selected product info.");
        return response.status;
     }
}
