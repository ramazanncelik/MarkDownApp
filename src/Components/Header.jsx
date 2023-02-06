import React, { useState } from 'react'
import MainModal from './Modals/MainModal';


function Header() {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    return (
        <div style={{ width: '98%', backgroundColor: '#fdba74', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'row', padding: '1%',borderRadius:10 }}>
            <div style={{ width: '50%', fontWeight: 700, fontSize: 24, alignItems: 'center', justifyContent: 'center' }}>
                MarkDown App
            </div>
            <div onClick={() => openModal()} style={{ width: '25%', alignItems: 'center', alignContent: 'center', justifyContent: 'center', justifyItems: 'center' }}>
                <div style={{ width: 24, height: 24, fontWeight: 700, fontSize: 24, color: 'white', borderRadius: 700, padding: 2, cursor: 'pointer', backgroundColor: 'green',textAlign:'center' }}>
                    +
                </div>
            </div>
            <MainModal openModal={openModal} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} modalName={"add-note-modal"} />
        </div>
    )
}

export default Header