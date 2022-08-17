import React from 'react';
import { Link, NavLink, Route, useParams, useHistory, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFilmLocation } from '../../store/filmLocations';
import Reviews from '../Reviews/Reviews.js'
import EditFilmLocationModal from '../EditFilmLocationModal/EditFilmLocationModal';
import MapContainer from '../MapContainer/MapContainer';


import './SingleFilmLocation.css'
import '../Navigation/Navigation.css'
import '../global.css'


function SingleFilmLocation() {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams()

    const { filmLocationId } = params
    const filmLocations = useSelector(state => state.filmLocationsReducer)
    const currentFilmLocation = filmLocations[filmLocationId]

    const reviews = useSelector(state => state.reviewsReducer)

    let userId = useSelector((state) => state.session.user?.id)

    const [showMap, setShowMap] = useState(true);
    const [showNotes, setShowNotes] = useState(false);
    const [showReviews, setShowReviews] = useState(false);

    const mapOnClick = () => {
        setShowMap(true);
        setShowNotes(false);
        setShowReviews(false);
    }

    const notesOnClick = () => {
        setShowMap(false);
        setShowNotes(true);
        setShowReviews(false);
    }

    const reviewsOnClick = () => {
        setShowMap(false);
        setShowNotes(false);
        setShowReviews(true);
    }



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
                        <button className='user-button' id='back-button'>Back to Film Locations</button>
                    </Link>
                    <div id='single-film-location'>
                        <div id='image-div'>
                            <img id='main-image' src={currentFilmLocation.imageUrl} />
                        </div>
                        <div id='location-info'>
                            <h1 id='single-location-title' >{currentFilmLocation.title}</h1>
                            <p id='single-location-logline' >{currentFilmLocation.logline}</p>
                            <p id='single-location-desc' >{currentFilmLocation.description}</p>
                            <p id='single-location-address'>Address: {currentFilmLocation.address}</p>

                            {currentFilmLocation.userId === userId && (
                                <div id='location-buttons-div'>
                                    <EditFilmLocationModal currentFilmLocation={currentFilmLocation} />
                                    <button className='user-button'
                                        onClick={onClick}
                                    >Delete Location
                                    </button>
                                </div>
                            )}
                            <div className='location-page-nav'>
                                <h2 className='location-nav-title' onClick={mapOnClick}>Map</h2>
                                {/* <h2 className='location-nav-title' onClick={notesOnClick}>Notes</h2> */}
                                <h2 className='location-nav-title' onClick={reviewsOnClick}>Reviews</h2>
                            </div>
                            
                            {showMap ?
                            <div id="map-div">
                                <MapContainer address={currentFilmLocation.address} />
                                </div>
                                :
                                showNotes ? <div style={{color:"white"}}>Notes</div>
                                    :
                                    <Reviews reviews={reviews} currentFilmLocation={currentFilmLocation} />
                            }

                        </div>
                    </div>

                </div>
            )}

        </div>
    )
}

export default SingleFilmLocation
