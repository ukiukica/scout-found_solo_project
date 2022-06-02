import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import filmLocationsReducer, { createFilmLocation, editFilmLocation } from '../../store/filmLocations';
import * as sessionActions from "../../store/session";
import EditFilmLocationForm from './EditFilmLocationForm';

const EditFilmLocation = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    const {filmLocationId} = params;
    const filmLocations = useSelector(state => state.filmLocationsReducer)
    const currentFilmLocation = filmLocations[filmLocationId]

    console.log("CURRENT FILM LOCATION", currentFilmLocation)

    return (
        <div>
        {currentFilmLocation &&
            <EditFilmLocationForm currentFilmLocation={currentFilmLocation} />
            }
        </div>
    )
        }
export default EditFilmLocation
