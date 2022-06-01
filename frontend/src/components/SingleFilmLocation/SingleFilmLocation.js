import React from 'react';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFilmLocation } from '../../store/filmLocations';

function SingleFilmLocation() {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams()

    const {filmLocationId} = params
    const filmLocations = useSelector(state => state.filmLocationsReducer)
    const currentFilmLocation = filmLocations[filmLocationId]
    console.log("CURRENT FILM LOCATION", currentFilmLocation)

    const onClick = async (e) => {
        e.preventDefault();

        let removedFilmLocation = await dispatch(removeFilmLocation(currentFilmLocation))

        if (removedFilmLocation) {
            history.push(`/filmLocations`)
        }
    }

    return (
        <div>
            <h1>Single Film Location</h1>
            {currentFilmLocation && (
                <div>
            <ul>
                <li>{currentFilmLocation.title}</li>
                <li>{currentFilmLocation.description}</li>
                <li>{currentFilmLocation.address}</li>
                <li><img src={currentFilmLocation.imageUrl} /></li>
            </ul>

            <button
                onClick={onClick}
            >Delete
            </button>

            <button>Edit</button>
            </div>
            )}
        </div>
    )
}

export default SingleFilmLocation
