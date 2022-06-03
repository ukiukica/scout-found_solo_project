import { csrfFetch } from "./csrf"

const POPULATE_REVIEWS = 'reviews/POPULATE'
const ADD_REVIEW = 'reviews/ADD'
const EDIT_REVIEW = 'reviews/EDIT'
const REMOVE_REVIEW = 'reviews/REMOVE'

const populate = (reviews) => ({
    type: POPULATE_REVIEWS,
    reviews
})

const add = (review) => ({
    type: ADD_REVIEW,
    review
})

const update = (review) => ({
    type: EDIT_REVIEW,
    review
})

const remove = (review) => ({
    type: REMOVE_REVIEW,
    review
})


const initialState = {};

export const getReviews = () => async (dispatch) => {
    const response = await fetch('/api/reviews');

    if (response.ok) {
        const reviews = await response.json();
        dispatch(populate(reviews))
    }
}

export const createReview = (payload) => async (dispatch) => {
    const response = await csrfFetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    if (response.ok) {
        const review = await response.json()
        dispatch(add(review))
        return review
    }
}

export const editReview = (payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${payload.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    if (response.ok) {
        const review = await response.json()
        dispatch(update(review))
        return review
    }
}

export const removeReview = (payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${payload.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    if (response.ok) {
        const review = await response.json()
        dispatch(remove(payload))
        return review
    }
}


const reviewsReducer = (state= initialState, action) => {
    switch (action.type) {
        case POPULATE_REVIEWS:
            const allReviews = {};
            action.reviews.forEach((review) => {
                allReviews[review.id] = review;
            });
            return {
                ...state,
                ...allReviews
            }
        case ADD_REVIEW:
            if (!state[action.review.id]) {
                const newState = {
                    ...state,
                    [action.review.id]: action.review
                }
                return newState
            }
        case EDIT_REVIEW:
            return {
                ...state,
                [action.review.id]: action.review
            }
        case REMOVE_REVIEW:
            const newState = {...state};
            delete newState[action.review.id];
            return newState;

        default:
            return state;

    }
}

export default reviewsReducer
