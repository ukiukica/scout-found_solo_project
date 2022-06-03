import React from 'react';
import { Link, NavLink, Route, useParams, useHistory, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFilmLocation } from '../../store/filmLocations';
import Reviews from '../Reviews/Reviews.js'
import EditFilmLocationModal from '../EditFilmLocationModal/EditFilmLocationModal';

function SingleFilmLocation() {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams()

    const { filmLocationId } = params
    const filmLocations = useSelector(state => state.filmLocationsReducer)
    const currentFilmLocation = filmLocations[filmLocationId]

    const reviews = useSelector(state => state.reviewsReducer)

    let userId = useSelector((state) => state.session.user?.id)


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
                    <Link to='/filmLocations'>
                    <button>Back to Film Locations</button>
                    </Link>

                    <div id='image-div'>
                        <img src={currentFilmLocation.imageUrl} />
                    </div>
                    <h1>{currentFilmLocation.title}</h1>
                    <p>{currentFilmLocation.logline}</p>
                    <p>{currentFilmLocation.description}</p>
                    <p>Address: {currentFilmLocation.address}</p>

                    {currentFilmLocation.userId === userId && (
                        <>
                            <EditFilmLocationModal currentFilmLocation={currentFilmLocation} />
                            <button
                                onClick={onClick}
                            >Delete Location
                            </button>
                        </>
                    )}

                    <Reviews reviews={reviews} currentFilmLocation={currentFilmLocation} />
                </div>
            )}

        </div>
    )
}

export default SingleFilmLocation
