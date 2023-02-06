import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { language } from '../../utils/utils';
import NoteInfo from './NoteInfo'

function Notes() {

    const { notes } = useSelector(state => state.note)
    const [noteList, setNoteList] = useState([]);

    useEffect(() => {

        setNoteList(notes);
        console.log(notes)

        return () => {
            setNoteList([]);
        }
    }, [notes]);

    if (noteList.length !== 0) {
        return (
            <div style={{ width: '100%', height: 'max-content' }}>
                {noteList.map(note => {
                    return (
                        <NoteInfo key={note.id} noteInfo={note} />
                    )
                })}
            </div>
        )
    } else {
        return (
            <div style={{ width: '96%', height: 'max-content', padding: '2%',backgroundColor:'#ffedd5',color:"#c2410c",borderRadius:10 }}>
                {language.includes("tr") ? "Notunuz bulunmamaktadır." : "Your do not have a note"}
            </div>
        )
    }
}

export default Notes