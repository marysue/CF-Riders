import { baseUrl } from '../config'

export const SET_BICYCLE_LIST = 'products/bicycles/bicycleList';
export const SET_BICYCLE_DETAIL = 'products/bicycles/bicycleDetail';
export const SET_BICYCLE_URL = 'products/bicycle/bicycleURL';


//actions
export const setBicycleList = bicycleList => ({ type: SET_BICYCLE_LIST, bicycleList });
export const setBicycleDetail = bicycleId => ({ type: SET_BICYCLE_DETAIL, bicycleId });
export const setBicycleURL = (url) => ({ type: SET_BICYCLE_URL, url});



//reducer
export default function reducer(state = {}, action) {
    switch (action.type) {
        case SET_BICYCLE_URL: {
            const newState = {...state};
            newState.bicycleURL = action.url;
            return newState;
        }
        case SET_BICYCLE_LIST: {
            const newState = {...state};
            newState.bicycleList = action.bicycleList;
            return newState
        };
        case SET_BICYCLE_DETAIL: {
            const newState = {...state};
            newState.bicycleDetail = action.bicycleId;
            return newState;
        };
        default:
            return state;
    }
};

export const fetchBicyclesList = async() => {

        try {
            const response = await fetch(`${baseUrl}/bicycles/bicyclesList`, {
                method: 'get',
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
                 return await response.json();

            } else {
                throw response.status;
            }
        } catch (e) {
            // console.log("BicyclesList fetch error: ", e);
        }
}
