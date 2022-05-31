const POPULATE = 'filmLocations/POPULATE'

const populate = (filmLocations) => ({
    type: POPULATE,
    filmLocations
})

const initialState = { list: [] };

export const getFilmLocations = () => async (dispatch) => {
    const response = await fetch('/api/filmLocations');

    if (response.ok) {
        const filmLocations = await response.json();
        dispatch(populate(filmLocations))
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
        default:
            return state;
    }
}

export default filmLocationsReducer;
