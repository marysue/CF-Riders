import React from 'react';

const UserReviewHead = (props) => {
    return (
        <div style={{border: "2px solid red"}}>
            <img src='./images/girl1.png' alt="Avatar" style={{height:"60px", width:"60px", borderRadius:"40px", backgroundColor:"none"}}/>
            <p style={{display:"inline-block"}}>User Name and post date</p>
            <p>star star star star star</p>
        </div>
    )
}

export default UserReviewHead;
