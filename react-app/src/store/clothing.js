import { baseUrl } from '../config'


export const SET_CLOTHING_LIST = 'products/Clothing/clothingList';
export const SET_CLOTHING_DETAIL = 'products/Clothing/clothingDetail';
export const SET_CLOTHING_LOADED = 'products/Clothing/clothingLoaded';
export const SET_CLOTHING_URL = 'products/clothing/clothingURL';

//actions
export const setClothingList = clothingList => ({ type: SET_CLOTHING_LIST, clothingList });
export const setClothingDetail = clothingDetail => ({ type: SET_CLOTHING_DETAIL, clothingDetail });
export const setClothingLoaded = clothingLoaded => ({ type: SET_CLOTHING_LOADED, clothingLoaded});
export const setClothingURL = (url) => ({ type: SET_CLOTHING_URL, url});

//reducer
export default function reducer(state = {}, action) {
    switch (action.type) {
      case SET_CLOTHING_LIST: {
          const newState = {...state};
          newState.clothingList = action.clothingList;
          return newState
      };
      case SET_CLOTHING_URL: {
        const newState = {...state};
        newState.clothingURL = action.url;
        return newState;
      }
      case SET_CLOTHING_DETAIL: {
          const newState = {...state};
          newState.clothingDetail = action.clothingDetail;
          return newState;
      }
      case SET_CLOTHING_LOADED: {
          const newState = {...state};
          newState.clothingLoaded = action.clothingLoaded;
          return newState;
      }
      default:
          return state;
    }
};

export const fetchClothingList = async() => {

        try {
            const response = await fetch(`${baseUrl}/clothing/clothingList`, {
                method: 'get',
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
                return await response.json();

            } else {
                throw response.status;
            }
        } catch (e) {
            // console.log("clothingList fetch error: ", e);
        }

}
