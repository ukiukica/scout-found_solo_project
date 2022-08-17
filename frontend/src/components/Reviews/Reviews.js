import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CreateReviewModal from '../CreateReviewModal/CreateReviewModal'
import EditReviewModal from '../EditReviewModal/Edit ReviewModal';
import { removeReview } from "../../store/reviews"

import './Reviews.css'

function Reviews({ reviews, currentFilmLocation }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const sessionUser = useSelector(state => state.session.user);
    let userId = useSelector((state) => state.session.user?.id)

    // const reviews = useSelector(state => state.reviewsReducer)
    const reviewsArr = Object.values(reviews)
    const relatedReviews = reviewsArr.filter(review => review.filmLocationId === currentFilmLocation.id)
    console.log("REVIEWS ARR NEW", relatedReviews)

    return (
        <div>
            {sessionUser ?
                <CreateReviewModal currentFilmLocation={currentFilmLocation} />
                : <h3 className='not-logged-in'>Log in to leave a review!</h3>
            }

            {reviewsArr && (
                <div id='review-container'>
                    {relatedReviews.map((review) => (
                        <div id='single-review-div' key={review.id}>
                            <div>
                                <h4 id='review-username'>{review?.User?.username}</h4>
                                <p id='review-date'>{review?.createdAt}</p>
                                <p>{review?.content}</p>

                                {review.userId === userId && (
                                    <>
                                        <EditReviewModal review={review} currentFilmLocation={currentFilmLocation} />
                                        <button
                                            className='user-button review-button'
                                            onClick={async (e) => {
                                                e.preventDefault();
                                                await dispatch(removeReview(review))
                                            }}
                                        >Delete
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>

                    ))}
                </div>
            )}
        </div>
    )
}

export default Reviews
