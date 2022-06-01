import React from 'react';
import { NavLink, Route, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function SingleFilmLocation() {
    const params = useParams()

    const {filmLocationId} = params
    const filmLocations = useSelector(state => state.filmLocationsReducer)
    const currentFilmLocation = filmLocations[filmLocationId]
    console.log("CURRENT FILM LOCATION", currentFilmLocation)
    return (
        <div>
            <h1>Single Film Location</h1>
            {currentFilmLocation && (
            <ul>
                <li>{currentFilmLocation.title}</li>
                <li>{currentFilmLocation.description}</li>
                <li>{currentFilmLocation.address}</li>
                <li><img src={currentFilmLocation.imageUrl} /></li>
            </ul>
            )}
        </div>
    )
}

export default SingleFilmLocation
