import React, { useState, useEffect } from 'react';


const UserReview = ({review}) => {
    //const [productId, setProductId] = useState(prodId);
    const [stars, setStars] = useState([]);
    useEffect ( () => {
        let myStars = [];
        for (let i = 0; i < review.rating; i++) {
            myStars.push(<i className="fas fa-star"></i>);
        }
        setStars(myStars);
    }, [review.rating]);
    return (
        <>
            <div >
                <img src={review.avatarURL} alt="Avatar" style={{height:"60px", width:"60px", borderRadius:"40px", backgroundColor:"none"}}/>
                <p style={{display:"inline-block"}}>{review.name},    {review.postDate}</p>
                <p>{stars}</p>
            </div>
            <div style={{borderBottom: "2px solid grey"}}>
                <p>{review.review}</p>
            </div>
     </>
    )
    }

export default UserReview;
