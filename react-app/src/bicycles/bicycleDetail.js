import React, { useState, useEffect } from 'react';
import {  useSelector  } from 'react-redux';
import { useLocation } from 'react-router-dom'
import ProductDetail from '../product/ProductDetail';
import { getSelectedProductInfo } from '../store/selectedProduct';
import { baseUrl } from '../config';

const BicycleDetail = () => {
    const location = useLocation()
    const productId = location.pathname.slice(15);
    // console.log("BicycleDetail: location: ", location);
    // console.log("BicycleDetail: ProductId: ", productId);
    const userId = useSelector(state => state.authentication.userId);
    const [detail, setDetail] = useState(undefined);
    const [userPosted, setUserPosted] = useState(undefined);
    const [productRating, setProductRating] = useState(undefined);
    const [userReviews, setUserReviews] = useState(undefined);
    console.log("BicycleDetail: UserId: ", userId);

    useEffect(() => {
        // console.log("BicycleDetail: useEffect: productId: ", productId);
        if (!productId) return;

        //Get selected product information
        (async() => {
            // console.log("BicycleDetail: useEffect: sending getSelectedProductInfo with productId: ", productId)
            const productInfo = await getSelectedProductInfo(productId)
            // console.log("BicycleDetail: useEffect: fetch bicycleDetail: ",  productInfo);
            setDetail(productInfo);
            console.log("BicycleDetail: ProductInfo:  ", productInfo);
        })();

        //get product rating
        (async() => {
            // console.log(`BicycleDetail: Sending get reviewsRatings/ratings/${productId}`);
            const response = await fetch(`${baseUrl}/reviewsRatings/rating/${productId}`);
            if (response.ok) {
                const resp = await response.json();
                // console.log("BicycleDetail: Rating received: ", resp.averageRating);
                setProductRating(resp.averageRating);
            } else {
                // console.log("BicycleDetail: : Errors fetching avgRating");
            }
        })();

        //get product review
        (async() => {
            console.log(`BicycleDetail: Sending request : /reviewsRatings/reviews/${productId}`);
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

                // console.log("BicycleDetail - useEffect - reviews: ", reviews);
                setUserReviews(reviews);
            } else {
                // console.log("BicycleDetail: :  Errors fetching user reviews...");
            }
        })();
    }, [productId])

    useEffect(() => {
        // console.log(`BicycleDetail: useEffect: sending /reviewsRatings/reviews/${userId}/${productId}`);
        if (!productId || !userId) return;
        (async() => {
            const response = await fetch(`${baseUrl}/reviewsRatings/reviews/${userId}/${productId}`);
            response.ok ? setUserPosted(false) : setUserPosted(true);
            // console.log("BicycleDetail: Has user already posted?  ", response.status);
        })();
    }, [productId, userId])

    if (!detail ) {
        // console.log(`Detail: ${detail} userPosted: ${userPosted} productRating: ${productRating} userReviews: ${userReviews}`);
        return ( <h2>Loading...</h2>)
    } else {
    return ( <ProductDetail detail={detail} userPosted={userPosted} productRating={productRating} userReviews={userReviews} /> )
    }
}

export default BicycleDetail;
