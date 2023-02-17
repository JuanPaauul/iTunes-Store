import ContentCard from "./Components/ContentCard";

function App() {
  
  return (
    <>
      <ContentCard
        imageUrl = 'https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/f3/ee/b3/f3eeb3ff-ca32-273a-15aa-709bdfa64367/mzi.izwiyqez.jpg/100x100bb.jpg'
        albumName = 'Three Way Tie for a Fifth'
        artistName = 'This Bike Is a Pipe Bomb'
        Price='9.99$' 
        isAlbum='true'
      />
    </>
  );
}

export default App;
