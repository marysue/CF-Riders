import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCartList, removeCartItem } from '../store/cart';

const CartItem = ({item, index}) => {
    const dispatch = useDispatch();

    const removeItem = async(e) => {
        console.log("Item:  ", item);
        const newCartList = await removeCartItem(item.userId, item.cartId, item.inventoryId);
        dispatch(setCartList(newCartList));
    }

    return (
        <div key={index} style={{display: "flex", marginBottom: "20px"}}>

                    <img src={item.photoUrl} className={"cartItem"} style={{height:"10%"}} alt="product"></img>

                    <div style={{width: "20%"}}>
                        <ul>
                            { item.description ? <li>Description: {item.description}</li> : null }
                            { item.size ? <li>Size: {item.size}</li>: null }
                            { item.color ? <li>Color: {item.color}</li>: null }
                            { item.frame ? <li>Frame: {item.frame} </li>: null }
                            { item.gender ? <li>Gender: {item.gender}</li> : null }
                            { item.type ? <li>Type:  {item.type}</li>: null }
                        </ul>
                    </div>
                    <p>${item.price}</p>
                    <button onClick={removeItem} style={{border: "2px solid black", color: "black", width: "150px", marginLeft: "20px", marginTop: "10px"}}>Remove from Cart</button>
        </div>
    )
}

export default CartItem;
