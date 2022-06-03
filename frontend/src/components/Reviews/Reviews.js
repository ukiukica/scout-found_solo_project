import React from 'react';
import { Link, NavLink, Route, useParams, useHistory, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditReviewForm from '../EditReviewModal/EditReviewForm';
import CreateReviewForm from '../CreateReview/CreateReviewForm'
import { removeReview } from "../../store/reviews"
import EditReviewModal from '../EditReviewModal/Edit ReviewModal';

function Reviews({ reviews, currentFilmLocation }) {
    const dispatch = useDispatch();
    const history = useHistory();

    // const reviews = useSelector(state => state.reviewsReducer)
    const reviewsArr = Object.values(reviews)

    return (
        <div>
            <h2>Reviews</h2>
            <button>Post a Review</button>
            <CreateReviewForm currentFilmLocation={currentFilmLocation} />
            {reviewsArr && (
                <div>
                    {reviewsArr.map((review) => (
                        <div key={review.id}>
                            <div>
                                <ul>
                                    <li>{review?.User?.username}</li>
                                    <li>{review?.content}</li>
                                </ul>
                                <EditReviewModal review={review} currentFilmLocation={currentFilmLocation}/>
                                <button
                                    onClick={async (e) => {
                                        e.preventDefault();
                                        await dispatch(removeReview(review))
                                    }}
                                >Delete
                                </button>
                            </div>
                            {/* <div>
                                <EditReviewForm review={review} currentFilmLocation={currentFilmLocation} />
                            </div> */}
                        </div>

                    ))}
                </div>
            )}
        </div>
    )
}

export default Reviews
