import ContentCard from "./Components/ContentCard";
import ContentOrganizer from "./Components/ContentOrganizer";
import axios from 'axios';
import { useEffect, useState } from "react";

function App() {
  const[iTunesData, setiTunesData] = useState([])

  const fetchData = async(url) => {
    try{
      const response = await axios.get(url)
      console.log(response)
      setiTunesData(response.data.results)
    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchData('https://itunes.apple.com/search?term=jack+johnson')
  },[])
  return (
    <>
      <ContentOrganizer
        data={iTunesData}
      />
    </>
  );
}

export default App;
