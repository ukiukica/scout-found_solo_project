import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as sessionActions from "../../store/session";
import { createReview } from '../../store/reviews';

import './CreateReview.css'
import '../Navigation/Navigation.css'
import '../../context/Modal.css'

const CreateReviewForm = ({ currentFilmLocation, closeModal }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    let userId = useSelector((state) => state.session.user.id)

    const [content, setContent] = useState("")
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
                content,
                userId,
                filmLocationId: currentFilmLocation.id

            }
            await dispatch(createReview(payload))
            closeModal()
        }
    }

    return (
        <div>
            <form className="forms"
                onSubmit={onSubmit}
            >
                <h2 className='form-title'>Post a Review</h2>
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
                        placeholder='Write something here...'
                        onChange={(e) => setContent(e.target.value)}
                        value={content}
                    />
                </label>
                <button
                    className='user-button'
                    type='submit'
                    // disabled={!!validationErrors.length}
                >
                    Submit
                </button>
            </form>
        </div>
    )

}

export default CreateReviewForm
