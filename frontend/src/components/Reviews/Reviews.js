import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CreateReviewModal from '../CreateReviewModal/CreateReviewModal'
import EditReviewModal from '../EditReviewModal/Edit ReviewModal';
import { removeReview } from "../../store/reviews"

function Reviews({ reviews, currentFilmLocation }) {
    const dispatch = useDispatch();
    const history = useHistory();

    let userId = useSelector((state) => state.session.user.id)

    // const reviews = useSelector(state => state.reviewsReducer)
    const reviewsArr = Object.values(reviews)
    const relatedReviews = reviewsArr.filter(review => review.filmLocationId === currentFilmLocation.id)
    console.log("REVIEWS ARR NEW", relatedReviews)

    return (
        <div>
            <h2>Reviews</h2>
            <CreateReviewModal currentFilmLocation={currentFilmLocation} />
            {reviewsArr && (
                <div>
                    {relatedReviews.map((review) => (
                        <div key={review.id}>
                            <div>
                                <h4>{review?.User?.username}</h4>
                                <p>{review?.content}</p>

                                {review.userId === userId && (
                                    <>
                                        <EditReviewModal review={review} currentFilmLocation={currentFilmLocation} />
                                        <button
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
