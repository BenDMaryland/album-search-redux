import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    albums: [], 
    searchValue: "yes"
}


export const albumSlice = createSlice({
    name: 'albumsArray',
    initialState,
    reducers: {

        fetchAlbums: (state) => {
            fetch(`https://itunes.apple.com/search?term=${state.searchValue} & media=music & entity=album & attribute=artistTerm & limit=200`)
                .then((res) => res.json())
                .then((data) => {
               //     console.log(data.results)
                    state.albums = data.results
                })
        },
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
