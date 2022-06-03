import React from 'react';
import { Link, NavLink, Route, useParams, useHistory, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditReviewForm from '../EditReview/EditReviewForm';
import CreateReviewForm from '../CreateReview/CreateReviewForm'
import {removeReview} from "../../store/reviews"

function Reviews({reviews, currentFilmLocation }) {
    const dispatch = useDispatch();
    const history = useHistory();

    // const reviews = useSelector(state => state.reviewsReducer)
    const reviewsArr = Object.values(reviews)


    return (
        <div>
            <h2>Reviews</h2>
            <button>Post a Review</button>
            <CreateReviewForm currentFilmLocation={currentFilmLocation}/>
            {reviewsArr && (
                <div>
                {reviewsArr.map((review) => (
                    <div>
                        {console.log("REVIEWS ARR!!!!", reviewsArr)}
                        <ul key={review.id}>
                            <li>{review?.User?.username}</li>
                            <li>{review?.content}</li>
                        </ul>
                        <button>Edit</button>
                        <button
                            onClick={async (e) => {
                                e.preventDefault();
                                let removedReview = await dispatch(removeReview(review))
                                if (removedReview) history.push(`/filmLocations/${currentFilmLocation.id}`)
                            }}
                        >
                            Delete</button>
                        <EditReviewForm review={review} currentFilmLocation={currentFilmLocation} />
                    </div>

                ))}
                </div>
            )}
        </div>
    )
}

export default Reviews
