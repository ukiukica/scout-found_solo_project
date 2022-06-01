import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { createFilmLocation, editFilmLocation } from '../../store/filmLocations';
import * as sessionActions from "../../store/session";

const EditFilmLocationForm = ({currentFilmLocation}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [title, setTitle] = useState(currentFilmLocation.title);
    const [description, setDescription] = useState(currentFilmLocation.description);
    const [imageUrl, setImageUrl] = useState(currentFilmLocation.imageUrl);
    const [address, setAddress] = useState(currentFilmLocation.address);
    const [validationErrors, setValidationErrors] = useState([])

    const updateTitle = (e) => setTitle(e.target.value)
    const updateDescription = (e) => setDescription(e.target.value)
    const updateImageUrl = (e) => setImageUrl(e.target.value)
    const updateAddress = (e) => setAddress(e.target.value)

    const currentFilmLocationId = currentFilmLocation.id;

    useEffect(() => {
        const errors = []

        if (!title.length) errors.push("Title field is required")
        if (!description.length) errors.push("Description is required")
        if (!imageUrl.length) errors.push("Image URL is required")
        if (!address.length) errors.push("Address is required")

        setValidationErrors(errors)
    }, [title, description, imageUrl, address])

    const onSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            id:currentFilmLocationId,
            title,
            description,
            imageUrl,
            address
        }
        let editedFilmLocation = await dispatch(editFilmLocation(payload));

        if (editedFilmLocation) {
            history.push(`/filmLocations/${currentFilmLocation.id}`)
        }
    }

    return (
        <form
            onSubmit={onSubmit}
        >
            <h2>Edit Film Location</h2>
            {validationErrors.length > 0 && (
                <div>
                    <ul className="errors">
                        {validationErrors.map(error => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
            <label>
                Title
                <input
                type='text'
                name='title'
                onChange={updateTitle}
                value={title}
                />
            </label>
            <label>
                Description
                <input
                type='text'
                name='description'
                onChange={updateDescription}
                value={description}
                />
            </label>
            <label>
                Image URL
                <input
                type='text'
                name='imageUrl'
                onChange={updateImageUrl}
                alt=""
                value={imageUrl}
                />
            </label>
            <label>
                Address
                <input
                type='text'
                name='address'
                onChange={updateAddress}
                value={address}
                />
            </label>
            <button
            type='submit'
            disabled={!!validationErrors.length}
            >
                Submit
            </button>
        </form>

    )



}

export default EditFilmLocationForm
