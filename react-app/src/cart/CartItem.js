import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCartList, removeCartItem, setCartListTotal } from '../store/cart';

const CartItem = ({item, index}) => {
    const dispatch = useDispatch();

    const removeItem = async(e) => {
        console.log("Item:  ", item);
        const newCartList = await removeCartItem(item.userId, item.cartId, item.inventoryId);
        let ncl = 0;
        for (let i = 0; i < newCartList.length; i++) {
            ncl += newCartList[i].price;

        }
        dispatch(setCartList(newCartList));
        dispatch(setCartListTotal(ncl));
    }

    return (
        <div key={index} style={{display: "flex", borderTop:"1px solid white",marginBottom: "20px"}}>

                    <img src={item.photoUrl} className={"cartItem"} style={{height:"10%", marginTop:"15px"}} alt="product"></img>

                    <div style={{ width: "20%"}}>
                        <ul>
                            { item.description ? <li>Description: {item.description}</li> : null }
                            { item.size ? <li>Size: {item.size}</li>: null }
                            { item.color ? <li>Color: {item.color}</li>: null }
                            { item.frame ? <li>Frame: {item.frame} </li>: null }
                            { item.gender ? <li>Gender: {item.gender}</li> : null }
                            { item.type ? <li>Type:  {item.type}</li>: null }
                        </ul>
                    </div>

                    <button onClick={removeItem} style={{border: "2px solid black", color: "black", width: "150px", marginLeft: "20px", marginTop: "10px"}}>Remove from Cart</button>
                    <div style={{display: "flex", marginLeft: "100px", marginTop: "20px", alignItems: "flex-start"}}>Price: ${Number(parseFloat(item.price).toFixed(2)).toLocaleString('en', {minimumFractionDigits : 2})}</div>
        </div>
    )
}

export default CartItem;
