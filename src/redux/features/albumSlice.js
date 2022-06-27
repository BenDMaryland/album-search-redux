import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    albums: [], 
    searchValue: "yes"
}


export const albumSlice = createSlice({
    name: 'albumsArray',
    initialState,
    reducers: {

  
        setSearchValue: (state, data) => {
           
            state.searchValue = data.payload
            console.log(state.searchValue)
        },
        setalbums: (state, data) => {

            state.albums = data.payload
            console.log(state.albums, state.searchValue)
        }


    }
})

export const { fetchAlbums, setalbums, setSearchValue } = albumSlice.actions
export default albumSlice.reducer
