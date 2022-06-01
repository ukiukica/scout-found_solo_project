import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createFilmLocation } from '../store/filmLocations';

const createFilmLocation = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImgUrl] = useState('');
    const [address, setAddress] = useState('');

    const updateTitle = (e) => setTitle(e.target.value)
    const updateDescription = (e) => setDescription(e.target.value)
    const updateImgUrl = (e) => setImgUrl(e.target.value)
    const updateAddress = (e) => setAddress(e.target.value)

    useEffect(() => {
        const errors = []

        if (!title.length) errors.push("Title field is required")
        if (!description.length) errors.push("Description is required")
        if (!imageUrl.length) errors.push("Image URL is required")
        if (!address.length) errors.push("Address is required")

        setValidationErrors(errors)
    }, [title, description, imageUrl, address])

    const onSubmit = (e) => {
        e.preventDefault();

        //TODO on submit
    }

    return (
        <form
            onSubmit={onSubmit}
        >
            <h2>Add a Film Location</h2>
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
                
            </label>
        </form>
    )
}
