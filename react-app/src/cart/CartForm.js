import React, { useEffect } from 'react';
//import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
//import { Button } from 'react-bootstrap';
import { baseUrl } from '../config';
import CartItem from './CartItem';
import { setCartList } from '../store/cart';

const CartForm = () => {

const userId = useSelector(state => state.authentication.userId);
const cartList = useSelector(state => state.cart.cartList);
const dispatch = useDispatch();

useEffect( () => {
    if (userId) {
        (async() => {
            const response = await fetch(`${baseUrl}/carts/${userId}`);
            if (response.ok) {
                const cl = await response.json();
                dispatch(setCartList(cl.cartList));
                console.log("CartList: set cl to:  ", cl.cartList);
            } else {
                console.log("CartList:  Failed fetch cart items");
            }
            })();
    } else {
        console.log("CartList:  Cannot fetch cart - No userId!");
    }
}, [userId])
if (!userId) {
    console.log("No userId!")
    return ( <h2>Loading...</h2>)
} else if (!cartList) {
    return (<h2>No items in your cart ...</h2>)
} else {
    console.log("cartList.length:  ", cartList.length);
    return (

        <div style={{display: "inline-block"}}>
            { cartList && cartList.length > 0 ? <h2>{cartList[0].userName}</h2> : null }
            { cartList && cartList.length > 0 ? cartList.map((item, index) => { return <CartItem item={item} index={index}></CartItem>})
            : <h2>No items in your cart</h2> }
        </div>
    );
}
}

export default CartForm;
