import React, { useState } from 'react'
import { language } from '../../utils/utils'
import { nanoid } from 'nanoid'
import moment from 'moment/moment'
import { addNote } from '../../store/note'
import store from '../../store'

function AddNote({ closeModal }) {

    const [noteText, setNoteText] = useState("");
    const [addError, setAddError] = useState(false);

    const handleSubmit = async () => {

        if (noteText !== "") {
            let today = new Date();

            let todayy = today.getFullYear() + '' +
                ((today.getMonth() + 1) < 10 ? ("0" + (today.getMonth() + 1))
                    : (today.getMonth() + 1)) + '' + today.getDate() + ", " +
                today.getHours() + ":" +
                ((today.getMinutes()) < 10 ? ("0" + (today.getMinutes()))
                    : (today.getMinutes())) + ":" +
                today.getSeconds();

            const time = today.getFullYear() + '' +
                (today.getMonth() < 10 ? ("0" + today.getMonth()) : today.getMonth())
                + "" +
                (today.getDate() < 10 ? ("0" + today.getDate()) : today.getDate())
                + "" +
                (today.getHours() < 10 ? ("0" + today.getHours()) : today.getHours())
                + "" +
                (today.getMinutes() < 10 ? ("0" + today.getMinutes()) : today.getMinutes())
                + "" +
                (today.getSeconds() < 10 ? ("0" + today.getSeconds()) : today.getSeconds())
                + "" +
                (today.getMilliseconds() < 10 ? ("0" + today.getMilliseconds()) : today.getMilliseconds());


            const newNote = {
                id: nanoid(),
                Text: noteText,
                FullDate: todayy,
                Date: moment().format('lll'),
                Time: time,
                Month: (today.getMonth() + 1),
            }

            store.dispatch(addNote(newNote));
            setNoteText("");
            closeModal();
            setAddError(false);
        } else {
            setAddError(true);
        }

    }

    return (
        <div style={{ width: 'max-content', height: 'max-content', display: 'grid', gap: 10 }}>
            <h2 style={{ width: '100%', textAlign: 'center' }}>
                {language.includes("tr") ? "Not Ekle" : "Add Note"}
            </h2>
            <textarea
                style={{ maxWidth: 400, minWidth: 400, maxHeight: 200, minHeight: 200, padding: 5 }}
                value={noteText}
                onChange={e => setNoteText(e.target.value)}
                placeholder={language.includes("tr") ? "Notunuz" : "Your Note"}
                required
            />

            {addError &&
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

export default AddNote;