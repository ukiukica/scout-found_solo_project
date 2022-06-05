import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateReviewForm from './CreateReviewForm'

function CreateReviewModal ({currentFilmLocation}) {
  const [showModal, setShowModal] = useState(false);

    return (
        <>
          <button className='user-button' onClick={() => setShowModal(true)}>Post a Review</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <CreateReviewForm closeModal={() => setShowModal(false)} currentFilmLocation={currentFilmLocation}/>
            </Modal>
          )}
        </>
      );
    }

    export default CreateReviewModal;
