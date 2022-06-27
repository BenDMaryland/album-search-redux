import { configureStore } from '@reduxjs/toolkit'
import albumReducer from './features/albumSlice'

export const store = configureStore({
    reducer: {
        albumsArray: albumReducer
    },
})