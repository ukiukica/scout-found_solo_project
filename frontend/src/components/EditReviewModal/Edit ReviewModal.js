import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditReviewForm from './EditReviewForm';

function EditReviewModal ({review, currentFilmLocation}) {
  const [showModal, setShowModal] = useState(false);

    return (
        <>
          <button onClick={() => setShowModal(true)}>Edit</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <EditReviewForm closeModal={() => setShowModal(false)} review={review} currentFilmLocation={currentFilmLocation}/>
            </Modal>
          )}
        </>
      );
    }

    export default EditReviewModal;
