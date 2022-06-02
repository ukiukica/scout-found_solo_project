import React from 'react';
import { Link, NavLink, Route, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { getFilmLocations } from '../../store/filmLocations'


function FilmLocations() {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getFilmLocations())
    // }, [dispatch])
    const filmLocations = useSelector(state => state.filmLocationsReducer)
    // console.log(filmLocations)
    return (
        <>
            <h2>Film Locations</h2>
            <div>
            {filmLocations.list.map((filmLocation) => (
                <ul key={filmLocation.id}>
                    <li><Link to={`/filmLocations/${filmLocation.id}`}>{filmLocation.title}</Link></li>
                    <li>{filmLocation.description}</li>
                    <li>{filmLocation.address}</li>
                    <li><img src={filmLocation.imageUrl}/></li>
                </ul>
            ))}
            <Link to={`/filmLocations/new`}>
                <button>Add a Location</button>
            </Link>
            </div>


        </>
    )
}

export default FilmLocations
