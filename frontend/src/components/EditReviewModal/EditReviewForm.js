import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, Redirect } from 'react-router-dom';

import { editReview } from '../../store/reviews'

import './EditReview.css'

const EditReviewForm = ({review, currentFilmLocation, closeModal}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [content, setContent] = useState(review.content)
    const [validationErrors, setValidationErrors] = useState([])

    useEffect(() => {
        const errors = []

        if (!content.length) errors.push("Content is required")

        setValidationErrors(errors)
    }, [content])

    const onSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            id: review.id,
            content
        }
        await dispatch(editReview(payload))
        closeModal()

    }

    return (
        // <div className={hidden ? 'edit-form is-hidden' : 'edit-form'}>
        <div>
            <form
                onSubmit={onSubmit}
            >
                <h2>Edit Your Post</h2>
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
                    Content
                    <input
                        type='text'
                        name='content'
                        onChange={(e) => setContent(e.target.value)}
                        value={content}
                    />
                </label>
                <button
                    type='submit'
                    disabled={!!validationErrors.length}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default EditReviewForm
