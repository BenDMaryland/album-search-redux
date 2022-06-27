// import React from 'react'

// import { useDispatch, useSelector } from "react-redux";
// import { setalbums, fetchAlbums } from '../redux/features/albumSlice';


// function Card() {
//   const { albums } = useSelector(state => state.albumsArray)
//   //console.log("the albums are ", albums)

//   return (
//     <section>
//       {albums.map(album => {
//         return (<div>

//           <h2> Artist : {album.artistName}</h2>
//           <img alt={album.c} src={album.artworkUrl100}></img>
//           <p>Album: {album.collectionCensoredName}</p>
//         </div>)
//       })}
//     </section>
//   )
// }

// export default Card

// let exam = {
//   "wrapperType": "track",
//   "kind": "song",
//   "artistId": 591899010,
//   "collectionId": 1337974012,
//   "trackId": 1337974496,
//   "artistName": "Burna Boy",
//   "collectionName": "Outside",
//   "trackName": "Ye",
//   "collectionCensoredName": "Outside",
//   "trackCensoredName": "Ye",
//   "artistViewUrl": "https://music.apple.com/us/artist/burna-boy/591899010?uo=4",
//   "collectionViewUrl": "https://music.apple.com/us/album/ye/1337974012?i=1337974496&uo=4",
//   "trackViewUrl": "https://music.apple.com/us/album/ye/1337974012?i=1337974496&uo=4",
//   "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/8e/76/f6/8e76f6e5-a15b-942c-2a77-47b4f1b9a58c/mzaf_14961614663628044664.plus.aac.p.m4a",
//   "artworkUrl30": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/9f/95/30/9f9530db-abe1-7bfd-2680-5762c45f8157/075679878533.jpg/30x30bb.jpg",
//   "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/9f/95/30/9f9530db-abe1-7bfd-2680-5762c45f8157/075679878533.jpg/60x60bb.jpg",
//   "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/9f/95/30/9f9530db-abe1-7bfd-2680-5762c45f8157/075679878533.jpg/100x100bb.jpg",
//   "collectionPrice": 9.99,
//   "trackPrice": 1.29,
//   "releaseDate": "2019-12-20T12:00:00Z",
//   "collectionExplicitness": "explicit",
//   "trackExplicitness": "explicit",
//   "discCount": 1,
//   "discNumber": 1,
//   "trackCount": 12,
//   "trackNumber": 6,
//   "trackTimeMillis": 231618,
//   "country": "USA",
//   "currency": "USD",
//   "primaryGenreName": "Afro-Pop",
//   "contentAdvisoryRating": "Explicit",
//   "isStreamable": true
// }