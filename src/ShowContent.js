import ContentOrganizer from "./Components/ContentOrganizer";
import { Box } from "@mui/system";

function formatString(theString, maxLength){
    if(theString === undefined){
      theString = '-----';
    }else if(theString.length > maxLength){
      theString = theString.slice(0, maxLength)+'...'
    }
    return theString;
  }
function sortDataByKind(data){
  let moviesArray = []
  let songsArray = []
  data.forEach(element => {
    let content = {
      'ImageUrl':element.artworkUrl100??'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/ITunes_logo.svg/1200px-ITunes_logo.svg.png',
      'AlbumId':element.collectionId,
      'AlbumName':formatString(element.collectionName, 9),
      'ArtistName':formatString(element.artistName, 30),
      'Price':element.collectionPrice
    }
    if(element.kind === 'feature-movie'){
      moviesArray.push(content)
    }
    if(element.kind === 'song'){
      songsArray.push(content)
    }
  });
  return [moviesArray, songsArray];
}

function sortByAlbum(songsArray){
  let albums=[]
  let ids={}
  songsArray.forEach(song =>{
    console.log(ids[song.AlbumId])
    if(!ids[song.AlbumId]){
      albums.push(song)
      ids[song.AlbumId] = true;
    }
  });
  return albums;
}

function ShowContent(iTunesData) {
  let moviesArray = []
  let songsArray = []
  console.log(iTunesData.iTunesData)
  if(iTunesData.iTunesData.length > 0){
    let res = sortDataByKind(iTunesData.iTunesData);
    moviesArray = res[0];
    songsArray = res[1];
    let albumsArray = sortByAlbum(songsArray)
    return (
      <>
        <Box height='70px'></Box>
        <ContentOrganizer
          songsArray = {albumsArray.slice(0,7)}
        />
      </>
    );
    }
}

export default ShowContent;
export {formatString, sortDataByKind};