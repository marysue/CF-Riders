import { baseUrl } from '../config'

//constants
export const SET_CART_LIST = 'cart/setCartList';
export const REMOVE_CART_LIST = 'cart/removeCartList';
export const SET_CART_LIST_TOTAL = 'cart/setCartListTotal';
export const REMOVE_CART_LIST_TOTAL = 'cart/removeCartListTotal';

//actions
export const setCartList = cartList => ({ type: SET_CART_LIST, cartList });
export const removeCartList = () => ({ type: REMOVE_CART_LIST });
export const setCartListTotal = total => ({ type: SET_CART_LIST_TOTAL, total });
export const removeCartListTotal = () => ({ type: REMOVE_CART_LIST_TOTAL });

//reducer
export default function reducer(state = {}, action) {
    switch (action.type) {
      case SET_CART_LIST: {
          const newState = {...state};
          newState.cartList = action.cartList;
          return newState
      };
      case REMOVE_CART_LIST: {
          const newState = {...state};
          delete newState.cartList;
          return newState;
      };
      case SET_CART_LIST_TOTAL: {
          const newState = { ...state};
          newState.cartListTotal = action.total;
          return newState;
      }
      case REMOVE_CART_LIST_TOTAL: {
          const newState = { ...state};
          delete newState.cartListTotal;
          return newState;
      }
      default:
          return state;
    }
};

export const fetchCartList = async(userId) => {

    try {
        const response = await fetch(`${baseUrl}/carts/userId`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            return await response.json();
        } else {
            throw response.status;
        }
    } catch (e) {
        // console.log("CartList fetch error: ", e);
    }
}

export const addCartItem = async(userId, inventoryId, quantity) => {
    try {
        const response = await fetch(`${baseUrl}/carts/`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId: userId,
                inventoryId: inventoryId,
                quantity: 1
            })})
            if (response.ok) {
                const retVal = response.json();
                return retVal;
            } else {
                // console.log("cart fetch:  failed to add new cart item.")
            }
        } catch (e) {
            // console.log("cart fetch: failed to create new cart item.  ", e);
        }
    }
export const orderCartItems = async(userId) => {
    try {
        const response = await fetch(`${baseUrl}/order/orderCart/${userId}`, {
        method: "post",
        headers: { "Content-Type": "application/json"}});
        if (!response.ok) {
            // console.log("Failed to place order from cart!")
        }
    } catch (e) {
        // console.log("Failed to place order.  ", e);
    }
}



export const removeCartItem = async(userId, cartId, inventoryId) => {
    try {
        const response = await fetch(`${baseUrl}/carts/removeCartItem/${cartId}`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId: userId,
                quantity: 1,
                inventoryId: inventoryId,
            })})
            if (response.ok) {
                const updatedCart = await response.json();
                return updatedCart;
            } else {
                // console.log("Failed to delete cartItem.  Response: ", response.status);
            }
    } catch (e) {

    }
}
