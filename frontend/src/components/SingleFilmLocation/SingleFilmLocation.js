import React from 'react';
import { Link, NavLink, Route, useParams, useHistory, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFilmLocation } from '../../store/filmLocations';
import Reviews from '../Reviews/Reviews.js'

function SingleFilmLocation() {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams()

    const { filmLocationId } = params
    const filmLocations = useSelector(state => state.filmLocationsReducer)
    const currentFilmLocation = filmLocations[filmLocationId]
    console.log("CURRENT FILM LOCATION", currentFilmLocation)

    const reviews = useSelector(state => state.reviewsReducer)
    let userId = useSelector((state) => state.session.user.id)



    const onClick = async (e) => {
        e.preventDefault();

        let removedFilmLocation = await dispatch(removeFilmLocation(currentFilmLocation))

        if (removedFilmLocation) {
            history.push(`/filmLocations`)

        }
    }

    return (
        <div>
            {currentFilmLocation && reviews && (
                <div>
                    <div id='image-div'>
                        <img src={currentFilmLocation.imageUrl} />
                    </div>
                    <h1>{currentFilmLocation.title}</h1>
                    <p>{currentFilmLocation.description}</p>
                    <p>Address: {currentFilmLocation.address}</p>

                    {currentFilmLocation.userId === userId && (
                        <>
                            <button
                                onClick={onClick}
                            >Delete
                            </button>
                            <Link to={`/filmLocations/${currentFilmLocation.id}/edit`}>
                                <button>Edit</button>
                            </Link>
                        </>
                    )}

                    <Reviews reviews={reviews} currentFilmLocation={currentFilmLocation} />
                </div>
            )}

        </div>
    )
}

export default SingleFilmLocation
