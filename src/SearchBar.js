import { IconButton, TextField } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import { Box } from "@mui/system";
import { useEffect } from "react";
import Header from "./Components/Header";

let pressedFirstLetter = true;
let startTime = Date.now();

function SearchBar({iTunesData, setiTunesData}){
  function fetchData(url, setiTunesData){
    fetch(url).then(response => response.json())
    .then(data => {
      setiTunesData(data.results)
    })
    .catch(error => console.log(error))
  }
  
  function changeHandler(e){
    if(pressedFirstLetter){
      pressedFirstLetter = false;
    }else{
      let timeNow = Date.now() - startTime;
      startTime = Date.now();
      if(timeNow>1000){
        fetchData(`https://itunes.apple.com/search?term=${e.target.value}`, setiTunesData)
      }
    }
  }

  useEffect(()=>{
    fetchData('https://itunes.apple.com/search?term=jack+johnson', setiTunesData)
  },[])

  return <Box>
    <Header changeHandler={changeHandler}/>
  </Box>
}

export default SearchBar;