import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, Redirect } from 'react-router-dom';

import { editReview } from '../../store/reviews'

import './EditReview.css'
import '../Navigation/Navigation.css'
import '../../context/Modal.css'

const EditReviewForm = ({ review, currentFilmLocation, closeModal }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [content, setContent] = useState(review.content)
    const [validationErrors, setValidationErrors] = useState([])
    const [showErrors, setShowErrors] = useState(false)

    useEffect(() => {
        const errors = []

        if (!content.length) errors.push("Content is required")

        setValidationErrors(errors)
    }, [content])

    const onSubmit = async (e) => {
        e.preventDefault();

        if (validationErrors.length) {
            setShowErrors(true);
        }
        else {
            const payload = {
                id: review.id,
                content
            }
            await dispatch(editReview(payload))
            closeModal()
        }
    }

    return (
        // <div className={hidden ? 'edit-form is-hidden' : 'edit-form'}>
        <div>
            <form className="forms"
                onSubmit={onSubmit}
            >
                <h2 className='form-title'>Edit Your Post</h2>
                <div className={showErrors ? '' : 'hidden'}>
                    <ul className="errors">
                        {validationErrors.map(error => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                </div>
                <label>
                    <textarea
                        className='form-input solo-textarea'
                        type='text'
                        name='content'
                        onChange={(e) => setContent(e.target.value)}
                        value={content}
                    />
                </label>
                <button
                    className='user-button'
                    type='submit'
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default EditReviewForm
