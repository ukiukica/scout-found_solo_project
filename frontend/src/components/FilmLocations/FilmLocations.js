import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CreateFilmLocationModal from '../CreateFilmLocationModal/CreateFilmLocationModal';




function FilmLocations() {

    const filmLocations = useSelector(state => state.filmLocationsReducer)
    const filmLocationsArr = Object.values(filmLocations)

    // const reviews = useSelector(state => state.reviewsReducer)
    // const reviewsArr = Object.values(reviews)

    return (
        <>
            <h1>All Film Locations</h1>
            {filmLocationsArr.map((filmLocation) => (
                <div key={filmLocation.id}>
                    <img src={filmLocation.imageUrl}/>
                    <h3><Link to={`/filmLocations/${filmLocation.id}`}>{filmLocation.title}</Link></h3>
                    <p>*film location logline goes here*</p>
                </div>
            ))}
            <CreateFilmLocationModal />
        </>
    )
}

export default FilmLocations
