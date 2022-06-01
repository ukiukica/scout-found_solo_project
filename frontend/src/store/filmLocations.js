import { csrfFetch } from "./csrf"

const POPULATE = 'filmLocations/POPULATE'
const ADD_FILM_LOCATION = 'filmLocations/ADD'

const populate = (filmLocations) => ({
    type: POPULATE,
    filmLocations
})

const addFilmLocation = filmLocation => ({
    type: ADD_FILM_LOCATION,
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
                    [action.filmLocation.id]: action.pokemon
                }
                const filmLocationList = newState.list.map(id => newState[id]);
                filmLocationList.push(action.filmLocation)
                return newState;
            }
            return {
                ...state,
                [action.filmLocation.id]: {
                    ...state[action.filmLocation.id],
                    ...action.pokemon
                }
            }
        default:
            return state;
    }
}

export default filmLocationsReducer;
