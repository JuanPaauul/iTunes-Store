import ContentOrganizer from "./Components/ContentOrganizer";
import { useEffect, useState } from "react";

function fetchData(url, setiTunesData){
  fetch(url).then(response => response.json())
  .then(data => {
    setiTunesData(data.results)
  })
  .catch(error => console.log(error))
}
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

function ShowContent() {
  const[iTunesData, setiTunesData] = useState([])
  let moviesArray = []
  let songsArray = []

  useEffect(()=>{
    fetchData('https://itunes.apple.com/search?term=jack+johnson', setiTunesData)
  },[])

  let res = sortDataByKind(iTunesData);
  moviesArray = res[0];
  songsArray = res[1];

  return (
    <>
      <ContentOrganizer
        songsArray = {songsArray}
        moviesArray = {moviesArray}
      />
    </>
  );
}

export default ShowContent;
export {fetchData, formatString, sortDataByKind};
