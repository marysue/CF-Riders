import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { baseUrl } from '../config';

const ProductReviewInput = ({productDetail, productId}) => {
    const history = useHistory();
    const [review, setReview] = useState('');
    const placeHolderMsg = 'Tell us what you like about this product ...';
    const [star1Active, setStar1Active] = useState(false);
    const [star2Active, setStar2Active] = useState(false);
    const [star3Active, setStar3Active] = useState(false);
    const [star4Active, setStar4Active] = useState(false);
    const [star5Active, setStar5Active] = useState(false);
    const [errors, setErrors] = useState();
    const [rating, setRating] = useState(0);
    const userId = useSelector(state => state.authentication.userId);

    const handleSubmitReview = (e) => {
        e.preventDefault();
        (async() => {
            const response = await fetch(`${baseUrl}/reviewsRatings/reviews/${productId}`, {
              method: 'post',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ userId, rating, review }),
            });
            if (response.ok) {
                setErrors('');
                setReview('');
                setRating(0);
                setStar1Active(false);
                setStar2Active(false);
                setStar3Active(false);
                setStar4Active(false);
                setStar5Active(false);
                history.push({ pathname: "/productDetail", state: {props: productDetail}});
              } else {
                  const res = await response.json();
                  setErrors(res);
                  console.log("ProductReviewInput: Failed to post review ...");
              }
          })();
    }

    const updateReview = (e) => {
        setReview(e.target.value);
    };


const handleStarClick = (e) => {
      let rating = 0;
      switch (e.target.id) {
          case "star1": {
              //yes, rating seems backwards, but the user just clicked
              //so we are reversing the rating from the previous setting.
              star1Active ? rating = 0 : rating = 1;
              setStar1Active(!star1Active);
              setStar2Active(false);
              setStar3Active(false);
              setStar4Active(false);
              setStar5Active(false);
              break;
          }
          case "star2":{
              star2Active ? rating = 0 : rating = 2;
              setStar2Active(!star2Active);
              setStar1Active(!star2Active);
              setStar3Active(false);
              setStar4Active(false);
              setStar5Active(false);

              break;
          }
          case "star3":{
              star3Active ? rating = 0 : rating = 3;
              setStar3Active(!star3Active);
              setStar2Active(!star3Active);
              setStar1Active(!star3Active);
              setStar4Active(false);
              setStar5Active(false);
              break;
          }
          case "star4":{
              star4Active ? rating = 0 : rating = 4;
              setStar4Active(!star4Active);
              setStar3Active(!star4Active);
              setStar2Active(!star4Active);
              setStar1Active(!star4Active);
              setStar5Active(false);
              break;
          }
          case "star5": {
              star5Active ? rating = 0 : rating = 5;
              setStar5Active(!star5Active);
              setStar4Active(!star5Active);
              setStar3Active(!star5Active);
              setStar2Active(!star5Active);
              setStar1Active(!star5Active);
              break;
              }
          default :
          }
          setRating(rating);

  };

    return (
        <>
                <div style={{borderTop: "2px solid grey", display:"inline-block", width:"60%"}}>
                    <div style={{display: "block"}}>
                        <h2>Add your review: </h2>

                        <h4>Rate this product:</h4>
                            <h2 onClick={handleStarClick} >
                            { star1Active ?
                                // eslint-disable-next-line
                                <a ><i id="star1"className="fas fa-star"></i></a> :
                                // eslint-disable-next-line
                                <a ><i id="star1"className="far fa-star"></i></a> }
                            { star2Active ?
                                // eslint-disable-next-line
                                <a ><i id="star2" className="fas fa-star"></i></a> :
                                // eslint-disable-next-line
                                <a ><i id="star2" className="far fa-star"></i></a>}
                            { star3Active ?
                                // eslint-disable-next-line
                                <a ><i id="star3" className="fas fa-star"></i></a> :
                                // eslint-disable-next-line
                            <a ><i id="star3" className="far fa-star"></i></a>}
                            { star4Active ?
                                // eslint-disable-next-line
                                <a ><i id="star4" className="fas fa-star"></i></a> :
                                // eslint-disable-next-line
                                <a ><i id="star4" className="far fa-star"></i></a>}
                            { star5Active ?
                                // eslint-disable-next-line
                                <a ><i id="star5" className="fas fa-star"></i></a> :
                                // eslint-disable-next-line
                                <a ><i id="star5" className="far fa-star"></i></a>}
                            </h2>
                            <div style={{borderTop: "2px solid grey", display:"inline-block", width:"60%"}}></div>
                        { errors ? <div style={{width:"81%", backgroundColor:"red", color:"white"}}>{errors}</div> : null }
                        <form style={{display: "flex"}}>
                            <textarea
                            style={{width: "80%"}}
                            value={review}
                            placeholder={placeHolderMsg}
                            id="review"
                            name="review"
                            rows="10"
                            onChange={updateReview}></textarea>

                            <button style={{marginLeft: "20px"}}id="Submit" onClick={handleSubmitReview}>Submit</button>
                        </form>
                    </div>
                </div>
        </>
    )
};

export default ProductReviewInput;
