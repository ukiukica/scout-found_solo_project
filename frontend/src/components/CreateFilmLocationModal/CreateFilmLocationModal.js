import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateFilmLocationForm from './CreateFilmLocationForm'


function CreateFilmLocationModal () {
  const [showModal, setShowModal] = useState(false);

    return (
        <>
          <button className='user-button' onClick={() => setShowModal(true)}>Add a Film Location</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <CreateFilmLocationForm closeModal={() => setShowModal(false)}/>
            </Modal>
          )}
        </>
      );
    }

    export default CreateFilmLocationModal;
