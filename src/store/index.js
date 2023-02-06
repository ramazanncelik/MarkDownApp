import { configureStore } from '@reduxjs/toolkit'
import note from './note'

const store = configureStore({
    reducer: {
        note
    }
})

export default store;