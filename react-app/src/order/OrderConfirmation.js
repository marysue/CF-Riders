import React from 'react';
import { useLocation } from "react-router-dom"

const OrderConfirmation = () => {
    const location = useLocation();
    const size = location.state.size;
    const color = location.state.color;
    const frame = location.state.frame;
    const type = location.state.type;
    const gender = location.state.gender;
    const price = location.state.price;
    const photoUrl = location.state.photoUrl;
    const name = location.state.name;

    return (
        <>
            <h1>Congratulations!  Your order has been placed.</h1>
            <h2>{name}</h2>
            <img src={photoUrl} style={{height:"20%"}} alt="product"></img>
            <p>{price}</p>
            <div>

                <h2>Order details:</h2>
                <ul>
                    { size ? <li>Size: {size}</li>: null }
                    { color ? <li>Color: {color}</li>: null }
                    { frame ? <li>Frame: {frame} </li>: null }
                    { gender ? <li>Gender: {gender}</li> : null }
                    { type ? <li>Type:  {type}</li>: null }
                    { price ? <li>Price: {price}</li> : null }
                </ul>


            </div>
        </>
    )
}

export default OrderConfirmation;
