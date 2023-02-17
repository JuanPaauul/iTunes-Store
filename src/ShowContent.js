import ContentCard from "./Components/ContentCard";
import ContentOrganizer from "./Components/ContentOrganizer";
import axios from 'axios';
import { useEffect, useState } from "react";

function ShowContent() {
  const[iTunesData, setiTunesData] = useState([])
  let moviesArray = []
  let songsArray = []

  const fetchData = async(url) => {
    try{
      const response = await axios.get(url)
      setiTunesData(response.data.results)
    }catch(error){
      console.log(error)
    }
  }

  function sortDataByKind(data){
    let moviesArray = []
    let songsArray = []

    function formatString(theString, maxLength){
      if(theString === undefined){
        theString = '-----';
      }else if(theString.length > maxLength){
        theString = theString.slice(0, maxLength)+'...'
      }
      return theString;
    }

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

  useEffect(()=>{
    fetchData('https://itunes.apple.com/search?term=jack+johnson')
  },[])

  let res = sortDataByKind(iTunesData);
  moviesArray = res[0];
  songsArray = res[1];

  console.log(moviesArray);

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
