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
      'ImageUrl':element.artworkUrl100,
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

function ShowContent(iTunesData) {
  let moviesArray = []
  let songsArray = []
  console.log(iTunesData.iTunesData)
  if(iTunesData.iTunesData.length > 0){
    let res = sortDataByKind(iTunesData.iTunesData);
    moviesArray = res[0];
    songsArray = res[1];

    return (
      <>
        <Box height='70px'></Box>
        <ContentOrganizer
          songsArray = {songsArray}
          moviesArray = {moviesArray}
        />
      </>
    );
    }
}

export default ShowContent;
export {formatString, sortDataByKind};