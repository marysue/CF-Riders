import { baseUrl } from '../config'


export const SET_ACCESSORY_LIST = 'products/accessory/accessoryList';
export const SET_ACCESSORY_DETAIL = 'products/accessory/accessoryDetail';
export const SET_ACCESSORY_LOADED = 'products/accessory/accessoryLoaded'
export const SET_ACCESSORY_URL = 'products/accessory/accessoryURL';

//actions
export const setAccessoryList = accessoryList => ({ type: SET_ACCESSORY_LIST, accessoryList });
export const setAccessoryDetail = accessoryDetail => ({ type: SET_ACCESSORY_DETAIL, accessoryDetail });
export const setAccessoriesLoaded = accessoriesLoaded => ({ type: SET_ACCESSORY_LOADED, accessoriesLoaded });
export const setAccessoryURL = (url) => ({ type: SET_ACCESSORY_URL, url});

//reducer
export default function reducer(state = {}, action) {
    switch (action.type) {
        case SET_ACCESSORY_URL: {
            const newState = {...state};
            newState.accessoryURL = action.url;
            return newState;
        }
      case SET_ACCESSORY_LIST: {
          const newState = {...state};
          newState.accessoryList = action.accessoryList;
          return newState
      };
      case SET_ACCESSORY_DETAIL: {
          const newState = {...state};
          newState.accessoryDetail = action.accessoryDetail;
          return newState;
      }
      case SET_ACCESSORY_LOADED : {
          const newState = { ...state};
          newState.accessoriesLoaded = action.accessoriesLoaded;
          return newState;
      }
      default:
          return state;
    }
};

export const fetchAccessoriesList = async() => {

    try {
        const response = await fetch(`${baseUrl}/accessories/accessoriesList`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            return await response.json();

        } else {
            throw response.status;
        }
    } catch (e) {
        // console.log("AccessoriesList fetch error: ", e);
    }
}
