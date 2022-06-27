import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setalbums, fetchAlbums, setSearchValue } from '../redux/features/albumSlice';
import { Button , Input,Box} from '@mui/material';


function SearchBar() {
  const { albums, searchValue } = useSelector(state => state.albumsArray)
  const dispatch = useDispatch()

  function fetchAllAlbums() {
    fetch(`https://itunes.apple.com/search?term=${searchValue} & media=music & entity=album & attribute=artistTerm & limit=200`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setalbums(data.results))
      }
      )
  }

  return (
    <Box display="flex"
      justifyContent="center"
      alignItems="center" >
      <Input align='center'  onKeyUp={(e) => {
        if (e.key === "Enter") {
          fetchAllAlbums(e)
        }
        else {
          dispatch(setSearchValue(e.target.value))
          console.log(e.target.value)
        }
      }}></Input>
      <Button onClick={fetchAllAlbums}>Search</Button>
    </Box>
  )
}

export default SearchBar