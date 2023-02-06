import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    notes: []
}

const note = createSlice({
    name: 'note',
    initialState,
    reducers: {
        addNote: (state, action) => {
            state.notes.push(action.payload)
        },
        deleteNote: (state, action) => {
            state.notes = state.notes.filter(item => item.id !== action.payload.id);
        },
        editNote: (state, action) => {
            const wantedNote = state.notes.find(item => item.id === action.payload.id)
            wantedNote.Text = action.payload.Text
        }
    }
});

export const { addNote, deleteNote,editNote } = note.actions
export default note.reducer;