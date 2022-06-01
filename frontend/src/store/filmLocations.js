import { csrfFetch } from "./csrf"

const POPULATE = 'filmLocations/POPULATE'
const ADD_FILM_LOCATION = 'filmLocations/ADD'
const REMOVE_FILM_LOCATION = 'filmLocation/REMOVE'

const populate = (filmLocations) => ({
    type: POPULATE,
    filmLocations
})

const addFilmLocation = (filmLocation) => ({
    type: ADD_FILM_LOCATION,
    filmLocation
})

const deleteFilmLocation = (filmLocation) => ({
    type: REMOVE_FILM_LOCATION,
    filmLocation
})

const initialState = { list: [] };

export const getFilmLocations = () => async (dispatch) => {
    const response = await fetch('/api/filmLocations');

    if (response.ok) {
        const filmLocations = await response.json();
        dispatch(populate(filmLocations))
    }
}

export const createFilmLocation = (payload) => async (dispatch) => {
    const response = await csrfFetch('/api/filmLocations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const filmLocation = await response.json()
        dispatch(addFilmLocation(filmLocation))
        return filmLocation
    }
}

export const editFilmLocation = (payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/filmLocations/${payload.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const filmLocation = await response.json()
        dispatch(addFilmLocation(filmLocation))
        return filmLocation
    }
}

export const removeFilmLocation = (payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/filmLocations/${payload.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const filmLocation = await response.json()
        dispatch(deleteFilmLocation(filmLocation))
        return filmLocation
    }
}

const filmLocationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case POPULATE:
            const allFilmLocations = {};
            action.filmLocations.forEach((filmLocation) => {
                allFilmLocations[filmLocation.id] = filmLocation;
            });
            return {
                ...allFilmLocations,
                ...state,
                list: action.filmLocations
            }
        case ADD_FILM_LOCATION:
            if (!state[action.filmLocation.id]) {
                const newState = {
                    ...state,
                    [action.filmLocation.id]: action.filmLocation
                }
                const filmLocationList = newState.list.map(id => newState[id]);
                filmLocationList.push(action.filmLocation)
                return newState;
            }
            return {
                ...state,
                [action.filmLocation.id]: {
                    ...state[action.filmLocation.id],
                    ...action.filmLocation
                }
            }
        case REMOVE_FILM_LOCATION:
            const newState = { ...state };
            delete newState[action.filmLocationId];
            return newState;
        default:
            return state;
    }
}

export default filmLocationsReducer;
