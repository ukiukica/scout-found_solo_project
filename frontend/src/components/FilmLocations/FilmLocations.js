import React from 'react';
import { NavLink, Route, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFilmLocations } from '../../store/filmLocations'


function FilmLocations() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFilmLocations())
    }, [dispatch])
    const filmLocations = useSelector(state => state.filmLocationsReducer)
    console.log(filmLocations)
    return (
        <>
            <h2>Film Locations</h2>
            {filmLocations.list.map((filmLocation) => (
                <ul>
                    <li key={filmLocation.title}>{filmLocation.title}</li>
                    <li key={filmLocation.description}>{filmLocation.description}</li>
                    <li><img src={filmLocation.imageUrl}/></li>
                </ul>
            ))}

            
        </>
    )
}

export default FilmLocations
