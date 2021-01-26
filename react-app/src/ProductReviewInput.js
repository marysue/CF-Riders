import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ProductRating from './ProductRating';

const ProductReviewInput = ({productId}) => {
    const history = useHistory();
    const [prodId, setProdId] = useState(productId);
    const [enterValue, setEnterValue] = useState('');
    const placeHolderMsg = 'Tell us what you like about this product ...';

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Handle updateProductReview ...");
        console.log("The next state may be problematic. Not sure about the next line passing state...");
        console.log("Entered:  ", enterValue);
        //(async () => {

        // const postReview = await postReview();

        // } )();
        history.push({ pathname: "/productDetail", state: {props: prodId}});
    }

    const updateReview = (e) => {
        setEnterValue(e.target.value);
    };
    return (
        <>

                <div style={{borderTop: "2px solid grey", display:"inline-block", width:"60%"}}>
                    <div style={{display: "block"}}>
                        <h2>Add your review: </h2>
                        <form >
                            <textarea
                            style={{width: "80%"}}
                            value={enterValue}
                            placeholder={placeHolderMsg}
                            id="review"
                            name="review"
                            rows="10"
                            onChange={updateReview}></textarea>

                            <button style={{marginLeft: "20px"}}id="Submit" onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            

            <ProductRating></ProductRating>
        </>
    )
};

export default ProductReviewInput;
