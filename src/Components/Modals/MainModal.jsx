import React from 'react'
import Modal from 'react-modal';
import AddNote from './AddNote';
import EditNote from './EditNote';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}
function MainModal({ data, modalIsOpen, setIsOpen, modalName }) {

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                {modalName === "add-note-modal" &&
                    <AddNote closeModal={closeModal} />
                    ||
                    modalName === "edit-note-modal" &&
                    <EditNote noteInfo={data} closeModal={closeModal} />}
            </Modal>
        </div>
    )
}

export default MainModal