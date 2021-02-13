import React, { useState, useEffect } from 'react';
import {  useSelector  } from 'react-redux';
import { useLocation } from 'react-router-dom'
import ProductDetail from '../product/ProductDetail';
import { getSelectedProductInfo } from '../store/selectedProduct';
import { baseUrl } from '../config';

const AccessoryDetail = () => {
    const location = useLocation()
    const productId = location.pathname.slice(17);
     console.log("ProductId: ", productId);
    // console.log("AccessoryDetail: location: ", location);
    // console.log("AccessoryDetail: ProductId: ", productId);
    const userId = useSelector(state => state.authentication.userId);
    const [detail, setDetail] = useState(undefined);
    const [userPosted, setUserPosted] = useState(undefined);
    const [productRating, setProductRating] = useState(undefined);
    const [userReviews, setUserReviews] = useState(undefined);
    console.log("AccessoryDetail: UserId: ", userId);

    useEffect(() => {
        // console.log("AccessoryDetail: useEffect: productId: ", productId);
        if (!productId) return;

        //Get selected product information
        (async() => {
            // console.log("AccessoryDetail: useEffect: sending getSelectedProductInfo with productId: ", productId)
            const productInfo = await getSelectedProductInfo(productId)
            // console.log("AccessoryDetail: useEffect: fetch AccessoryDetail: ",  productInfo);
            setDetail(productInfo);
        })();

        //get product rating
        (async() => {
            // console.log(`AccessoryDetail: Sending get reviewsRatings/ratings/${productId}`);
            const response = await fetch(`${baseUrl}/reviewsRatings/rating/${productId}`);
            if (response.ok) {
                const resp = await response.json();
                // console.log("AccessoryDetail: Rating received: ", resp.averageRating);
                setProductRating(resp.averageRating);
            } else {
                // console.log("AccessoryDetail: : Errors fetching avgRating");
            }
        })();

        //get product review
        (async() => {
            console.log(`AccessoryDetail: Sending request : /reviewsRatings/reviews/${productId}`);
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

                // console.log("AccessoryDetail - useEffect - reviews: ", reviews);
                setUserReviews(reviews);
            } else {
                // console.log("AccessoryDetail: :  Errors fetching user reviews...");
            }
        })();
    }, [productId])

    useEffect(() => {
        // console.log(`AccessoryDetail: useEffect: sending /reviewsRatings/reviews/${userId}/${productId}`);
        if (!productId || !userId) return;
        (async() => {
            const response = await fetch(`${baseUrl}/reviewsRatings/reviews/${userId}/${productId}`);
            response.ok ? setUserPosted(false) : setUserPosted(true);
            // console.log("AccessoryDetail: Has user already posted?  ", response.status);
        })();
    }, [productId, userId])

    if (!detail ) {
        // console.log(`Detail: ${detail} userPosted: ${userPosted} productRating: ${productRating} userReviews: ${userReviews}`);
        return ( <h2>Loading...</h2>)
    } else {
    return ( <ProductDetail detail={detail} userPosted={userPosted} productRating={productRating} userReviews={userReviews} /> )
    }
}

export default AccessoryDetail;
