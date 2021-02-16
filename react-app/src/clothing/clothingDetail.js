import React, { useState, useEffect } from 'react';
import {  useSelector  } from 'react-redux';
import { useLocation } from 'react-router-dom'
import ProductDetail from '../product/ProductDetail';
import { getSelectedProductInfo } from '../store/selectedProduct';
import { baseUrl } from '../config';

const ClothingDetail = () => {
    const location = useLocation()
    const productId = location.pathname.slice(16);
    const userId = useSelector(state => state.authentication.userId);
    const [detail, setDetail] = useState(undefined);
    const [userPosted, setUserPosted] = useState(undefined);
    const [productRating, setProductRating] = useState(undefined);
    const [userReviews, setUserReviews] = useState(undefined);

    useEffect(() => {
        if (!productId) return;

        //Get selected product information
        (async() => {
            const productInfo = await getSelectedProductInfo(productId)
            setDetail(productInfo);
        })();

        //get product rating
        (async() => {
            const response = await fetch(`${baseUrl}/reviewsRatings/rating/${productId}`);
            if (response.ok) {
                const resp = await response.json();
                setProductRating(resp.averageRating);
            } else {
                //  console.log("ClothingDetail: : Errors fetching avgRating");
            }
        })();

        //get product review
        (async() => {
            const response = await fetch(`${baseUrl}/reviewsRatings/reviews/${productId}`);
            if (response.ok) {
                const resp = await response.json();
                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                for (let i = 0; i < resp.reviews.length; i++) {
                    const dateString = resp.reviews[i].postDate;
                    const event = new Date(dateString);
                    const newDateStr = event.toLocaleDateString(undefined, options)
                    resp.reviews[i].postDate = newDateStr;
                }
                const reviews = resp.reviews;

                 setUserReviews(reviews);
            } else {
                //  console.log("ClothingDetail: :  Errors fetching user reviews...");
            }
        })();
    }, [productId])

    useEffect(() => {
        if (!productId || !userId) return;
        (async() => {
            const response = await fetch(`${baseUrl}/reviewsRatings/reviews/${userId}/${productId}`);
            response.ok ? setUserPosted(false) : setUserPosted(true);
        })();
    }, [productId, userId])

    if (!detail ) {
        return ( <h2>Loading...</h2>)
    } else {
    return ( <ProductDetail detail={detail} userPosted={userPosted} productRating={productRating} userReviews={userReviews} /> )
    }
}

export default ClothingDetail;
