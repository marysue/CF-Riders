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
    // console.log("Location:  ", location.state);
    // console.log("Size: ", location.state.size, size);
    // console.log("Color: ", location.state.color, color);
    // console.log("Frame: ", location.state.frame, frame);
    // console.log("Type: ", location.state.type, type);
    // console.log("Gender: ", location.state.gender, gender);
    // console.log("Price: ", location.state.price, price);
    // console.log("photoUrl: ", location.state.photoUrl, photoUrl);
    // console.log("name: ", location.state.name, name);
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
