import ShowContent from "./ShowContent";
import SearchBar from "./SearchBar";
import { useState } from "react";

function App() {
  const[iTunesData, setiTunesData] = useState([])
  function handleDataUpdate(data){
    setiTunesData(data)
  }

  return <>
      <SearchBar iTunesData={iTunesData} setiTunesData={handleDataUpdate}></SearchBar>
      <ShowContent iTunesData={iTunesData}></ShowContent>
    </>
}

export default App;
