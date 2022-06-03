import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditFilmLocationForm from './EditFilmLocationForm';

function EditFilmLocationModal ({currentFilmLocation}) {
  const [showModal, setShowModal] = useState(false);

    return (
        <>
          <button onClick={() => setShowModal(true)}>Edit Location</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <EditFilmLocationForm closeModal={() => setShowModal(false)} currentFilmLocation={currentFilmLocation}/>
            </Modal>
          )}
        </>
      );
    }

    export default EditFilmLocationModal;
