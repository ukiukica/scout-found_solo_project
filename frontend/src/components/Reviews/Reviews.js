import React from 'react';
import { Link, NavLink, Route, useParams, useHistory, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Reviews ({currentFilmLocation}) {
    const dispatch = useDispatch();
    const history = useHistory();

    const reviews = useSelector(state => state.reviewsReducer)
    const reviewsArr = Object.values(reviews)

    const editOnClick = async (e) => {
        e.preventDefault();

        
    }

    return (
        <div>
                <h2>Reviews</h2>
                {reviewsArr.map((review) => (
                    <ul key={review.id}>
                        <li>{review.User.username}</li>
                        <li>{review.content}</li>
                    </ul>
                ))}
                <button
                    onClick={editOnClick}
                >Edit
                </button>
                <button>Delete</button>
            </div>
    )
}

export default Reviews
