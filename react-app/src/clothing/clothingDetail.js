import React, { useState, useEffect } from 'react';
import {  useSelector  } from 'react-redux';
import { useLocation } from 'react-router-dom'
import NewProductDetail from '../newProductDetail';
import { getSelectedProductInfo } from '../store/selectedProduct';
import { baseUrl } from '../config';

const ClothingDetail = () => {
    const location = useLocation()
    const productId = location.pathname.slice(16);
    // console.log("ClothingDetail: location: ", location);
    // console.log("ClothingDetail: ProductId: ", productId);
    const userId = useSelector(state => state.authentication.userId);
    const [detail, setDetail] = useState(undefined);
    const [userPosted, setUserPosted] = useState(undefined);
    const [productRating, setProductRating] = useState(undefined);
    const [userReviews, setUserReviews] = useState(undefined);
    console.log("ClothingDetail: UserId: ", userId);

    useEffect(() => {
        // console.log("ClothingDetail: useEffect: productId: ", productId);
        if (!productId) return;

        //Get selected product information
        (async() => {
            // console.log("ClothingDetail: useEffect: sending getSelectedProductInfo with productId: ", productId)
            const productInfo = await getSelectedProductInfo(productId)
            console.log("ClothingDetail: useEffect: fetch ClothingDetail: ",  productInfo);
            setDetail(productInfo);
        })();

        //get product rating
        (async() => {
            // console.log(`ClothingDetail: Sending get reviewsRatings/ratings/${productId}`);
            const response = await fetch(`${baseUrl}/reviewsRatings/rating/${productId}`);
            if (response.ok) {
                const resp = await response.json();
                // console.log("ClothingDetail: Rating received: ", resp.averageRating);
                setProductRating(resp.averageRating);
            } else {
                // console.log("ClothingDetail: : Errors fetching avgRating");
            }
        })();

        //get product review
        console.log(`productId: ${productId}`);
        (async() => {
            console.log(`ClothingDetail: Sending request : /reviewsRatings/reviews/${productId}`);
            const response = await fetch(`${baseUrl}/reviewsRatings/reviews/${productId}`);
            console.log(`ClothingDetail: useEffect: response status: ${response.status}`);
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

                 console.log("ClothingDetail: useEffect - reviews: ", reviews);
                setUserReviews(reviews);
            } else {
                // console.log("ClothingDetail: :  Errors fetching user reviews...");
            }
        })();
    }, [productId])

    useEffect(() => {
        // console.log(`ClothingDetail: useEffect: sending /reviewsRatings/reviews/${userId}/${productId}`);
        if (!productId || !userId) return;
        (async() => {
            const response = await fetch(`${baseUrl}/reviewsRatings/reviews/${userId}/${productId}`);
            response.ok ? setUserPosted(false) : setUserPosted(true);
            // console.log("ClothingDetail: Has user already posted?  ", response.status);
        })();
    }, [productId, userId])

    if (!detail ) {
        // console.log(`Detail: ${detail} userPosted: ${userPosted} productRating: ${productRating} userReviews: ${userReviews}`);
        return ( <h2>Loading...</h2>)
    } else {
    return ( <NewProductDetail detail={detail} userPosted={userPosted} productRating={productRating} userReviews={userReviews} /> )
    }
}

export default ClothingDetail;
