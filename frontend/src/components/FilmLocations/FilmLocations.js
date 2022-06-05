import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CreateFilmLocationModal from '../CreateFilmLocationModal/CreateFilmLocationModal';
import './FilmLocations.css'



function FilmLocations() {
    const sessionUser = useSelector(state => state.session.user);

    const filmLocations = useSelector(state => state.filmLocationsReducer)
    const filmLocationsArr = Object.values(filmLocations)

    // const reviews = useSelector(state => state.reviewsReducer)
    // const reviewsArr = Object.values(reviews)

    return (
        <>
            <h1 id='list-title'>All Film Locations</h1>
            <div id='add-location-button-div'>
            {sessionUser &&
                <CreateFilmLocationModal />
            }
            </div>
        <div id='location-list'>
            {filmLocationsArr.map((filmLocation) => (
                <div className='location-item' key={filmLocation.id}>
                    <Link className='link-location-title' to={`/filmLocations/${filmLocation.id}`}>
                    <img className='list-image' src={filmLocation.imageUrl} />
                    </Link>
                    <h3 className='list-location-title' ><Link className='link-location-title' to={`/filmLocations/${filmLocation.id}`}>{filmLocation.title}</Link></h3>
                    <p className='list-location-logline'>{filmLocation.logline}</p>
                </div>
            ))}
        </div>

        </>
    )
}

export default FilmLocations
