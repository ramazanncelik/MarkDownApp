import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import convert from "react-from-dom";
import { marked } from "marked";
import { Pencil, Trash } from 'react-bootstrap-icons'
import store from '../../store';
import { deleteNote } from '../../store/note';
import moment from 'moment';
import MainModal from '../Modals/MainModal';

function NoteInfo({ noteInfo }) {

  const [note, setNote] = useState(noteInfo)
  const [modalIsOpen, setIsOpen] = useState(false);
  const [newContent, setNewContent] = useState(note.Text);
  const [htmlString, setHtmlString] = useState("<div>" + marked.parse(newContent) + "</div>")
  const [htmlDescription, setHtmlDescription] = useState(convert(htmlString))
  const month = ((new Date).getMonth() + 1);

  const noteDelete = async () => {
    store.dispatch(deleteNote(note))
  }

  function openModal() {
    setIsOpen(true);
  }

  function convertHtmlDescription(info) {
    setNewContent(info.Text);
    setHtmlString("<div>" + marked.parse(info.Text) + "</div>");
    setHtmlDescription(convert("<div>" + marked.parse(info.Text) + "</div>"));
  }

  useEffect(() => {

    setNote([]);
    setNote(noteInfo);
    convertHtmlDescription(noteInfo);

    return () => {
      setNote({});
    }
  }, [noteInfo])


  return (
    <div style={{ width: '46%', margin: '1%', height: 'max-content', backgroundColor: '#86efac', padding: '1%', float: 'left', borderRadius: 5, display: 'grid', gap: 10 }}>
      <div style={{ width: '100%', display: 'flex', gap: 10, alignItems: 'center', justifyContent: 'end' }}>
        <div style={{ flex: 1, color: 'gray' }}>
          {
            note.Month !== month ?
              note.Date
              :
              moment(note.FullDate, "YYYYMMDD, h:mm:ss").fromNow()
          }
        </div>
        <Pencil onClick={() => openModal()} color='blue' style={{ cursor: 'pointer' }} />
        <Trash onClick={() => noteDelete()} color='red' style={{ cursor: 'pointer' }} />
      </div>
      <div style={{ width: '98%', height: 250, padding: '1%', overflow: 'auto' }}>
        {htmlDescription}
      </div>
      <MainModal data={note} openModal={openModal} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} modalName={"edit-note-modal"} />
    </div>
  )
}

export default NoteInfo