import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createFilmLocation } from '../../store/filmLocations';
import * as sessionActions from "../../store/session";

import './CreateFilmLocation.css'
import '../Navigation/Navigation.css'
import '../../context/Modal.css'

const CreateFilmLocationForm = ({ closeModal }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [logline, setLogline] = useState('')
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [address, setAddress] = useState('');
    const [validationErrors, setValidationErrors] = useState([])
    const [showErrors, setShowErrors] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    const updateTitle = (e) => setTitle(e.target.value)
    const updateLogline = (e) => setLogline(e.target.value)
    const updateDescription = (e) => setDescription(e.target.value)
    const updateImageUrl = (e) => setImageUrl(e.target.value)
    const updateAddress = (e) => setAddress(e.target.value)

    useEffect(() => {
        dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    }, [dispatch]);

    let userId = useSelector((state) => state.session.user.id)

    useEffect(() => {
        const errors = []

        if (!title.length) errors.push("Title is required")
        if (!logline.length) errors.push("Logline is required")
        if (!description.length) errors.push("Description is required")
        if (!imageUrl.length) errors.push("Image URL is required")
        if (!address.length) errors.push("Address is required")

        setValidationErrors(errors)
    }, [title, logline, description, imageUrl, address])

    const onSubmit = async (e) => {
        e.preventDefault();

        if (validationErrors.length) {
            setShowErrors(true);
        }
        else {
            const payload = {
                title,
                logline,
                description,
                imageUrl,
                address,
                userId
            };
            await dispatch(createFilmLocation(payload));
            closeModal()
        }
    }

    return (
        <form className="forms"
            onSubmit={onSubmit}
        >
            <h2 className='form-title' >Add a Film Location</h2>
            <div className={showErrors ? '' : 'hidden'}>
                <ul className="errors">
                    {validationErrors.map(error => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
            </div>
            <div className='form-field'>
            <label className='form-label'>
                Title
                <input
                    className='form-input'
                    type='text'
                    name='title'
                    onChange={updateTitle}
                    value={title}
                />
            </label>
            <label className='form-label'>
                Logline
                <input
                    className='form-input'
                    type='text'
                    name='logline'
                    onChange={updateLogline}
                    value={logline}
                />
            </label>
            <label className='form-label'>
                Description
                <textarea
                    className='form-input textarea'
                    type='text'
                    name='description'
                    onChange={updateDescription}
                    value={description}
                />
            </label>
            <label className='form-label'>
                Image URL
                <input
                    className='form-input'
                    type='text'
                    name='imageUrl'
                    onChange={updateImageUrl}
                    alt=""
                    value={imageUrl}
                />
            </label>
            <label className='form-label'>
                Address
                <input
                    className='form-input'
                    type='text'
                    name='address'
                    onChange={updateAddress}
                    value={address}
                />
            </label>
            </div>
            <button
                className='user-button'
                type='submit'
                // disabled={!!validationErrors.length}
            >
                Add
            </button>
        </form>
    )
}

export default CreateFilmLocationForm
