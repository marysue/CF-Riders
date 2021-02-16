import React, { useEffect, useState } from 'react';
//import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { baseUrl } from '../config';
import CartItem from './CartItem';
import { setCartList, setCartListTotal, orderCartItems, removeCartList, removeCartListTotal } from '../store/cart';
import { setBadgeCount } from '../store/authentication';


const CartForm = () => {

const userId = useSelector(state => state.authentication.userId);
const userName = useSelector(state => state.authentication.name);
const cartList = useSelector(state => state.cart.cartList);
const totalCartList = useSelector(state => state.cart.cartListTotal);
const dispatch = useDispatch();
const [orderPlaced, setOrderPlaced] = useState(false);

useEffect( () => {
    if (userId) {

        (async() => {
            const response = await fetch(`${baseUrl}/carts/${userId}`);
            if (response.ok) {
                const cl = await response.json();
                dispatch(setCartList(cl.cartList));
                let tcl = 0
                for (let i = 0; i < cl.cartList.length; i++) {
                    tcl += cl.cartList[i].price;
                }
                dispatch(setCartListTotal((Number(parseFloat(tcl).toFixed(2)).toLocaleString('en', {minimumFractionDigits : 2}))));
            } else {
                console.log("CartList:  Failed fetch cart items");
            }
            })();
    } else {
        console.log("CartList:  Cannot fetch cart - No userId!");
    }
}, [userId, dispatch, totalCartList])

const buttonClickHandler = (e) => {
    orderCartItems(userId);
    dispatch(removeCartList());
    dispatch(removeCartListTotal());
    setOrderPlaced(true);
    dispatch(setBadgeCount(0));
}


if (!userId) {
    return ( <h2>Loading...</h2>)
} else if (orderPlaced) {
    return<h2>Your order has been placed!</h2>
}
else if (!cartList) {
    return (<h2>No items in your cart ...</h2>)
} else {
    return (

        <div style={{display: "inline-block"}}>
            <div style={{borderBottom:"1px solid white"}}>
                <h2>Shopping Cart</h2>
                <h2>{userName}</h2>
            </div>
            { cartList && cartList.length > 0 ?
            <div style={{display: "flex"}}>
                <h3>Your cart total:  ${totalCartList}</h3>
                <Button onClick={buttonClickHandler} style={{height:"30px", width:"160px", borderRadius:"2px solid black", marginTop:"10px", marginBottom: "10px", marginLeft: "60px", color:"black", border:"2px solid black" }}>Place order now!</Button>
            </div>
            : null }

            { cartList && cartList.length > 0 ? cartList.map((item, index) => { return <CartItem item={item} index={index}></CartItem>})
            : <h2>No items in your cart</h2> }
        </div>
    );
}
}

export default CartForm;
