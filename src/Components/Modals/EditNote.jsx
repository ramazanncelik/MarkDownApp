import React, { useState } from 'react'
import { language } from '../../utils/utils'
import { editNote } from '../../store/note'
import store from '../../store'

function EditNote({ noteInfo, closeModal }) {

    const [newText, setNewText] = useState(noteInfo.Text);
    const [editError, setEditError] = useState(false);

    const handleSubmit = async () => {

        if (newText !== "") {

            const newNote = { ...noteInfo, Text: newText }

            store.dispatch(editNote(newNote));
            setNewText("");
            closeModal();
            setEditError(false);
        } else {
            setEditError(true);
        }

    }

    return (
        <div style={{ width: 'max-content', height: 'max-content', display: 'grid', gap: 10 }}>
            <h2 style={{ width: '100%', textAlign: 'center' }}>
                {language.includes("tr") ? "Notu Düzenle" : "Edit Note"}
            </h2>
            <textarea
                style={{ maxWidth: 400, minWidth: 400, maxHeight: 200, minHeight: 200, padding: 5 }}
                value={newText}
                onChange={e => setNewText(e.target.value)}
                placeholder={language.includes("tr") ? "Notunuz" : "Your Note"}
            />

            {editError &&
                <div style={{ width: '96%', padding: '2%', backgroundColor: '#ef4444', color: 'white', borderRadius: 5 }}>
                    {language.includes("tr") ? "Lütfen kutucuğu boş bırakmayınız" : "Please do not leave the box blank"}
                </div>}

            <div style={{ width: '100%', display: 'flex', gap: 4, alignItems: 'center', justifyContent: 'center' }}>
                <button onClick={() => closeModal()} style={{ width: '50%', backgroundColor: '#e5e7eb', borderWidth: 0, padding: 10, borderRadius: 10, cursor: 'pointer' }}>
                    {language.includes("tr") ? "Kapat" : "Close"}
                </button>
                <button onClick={() => handleSubmit()} style={{ width: '50%', backgroundColor: '#2563eb', borderWidth: 0, padding: 10, borderRadius: 10, color: 'white', cursor: 'pointer' }}>
                    {language.includes("tr") ? "Ekle" : "Add"}
                </button>
            </div>
        </div>
    )
}

export default EditNote;