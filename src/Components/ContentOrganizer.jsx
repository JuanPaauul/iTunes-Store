import { Stack, Typography } from "@mui/material"
import { Box } from "@mui/system"
import ContentCard from "./ContentCard"

function ContentOrganizer({data, quantityPerPage}){
  //imageUrl, albumName, artistName, Price
  let songsArray = [];
  let moviesArray = [];
  data.forEach(element => {
    let content = {
      'ImageUrl':element.artworkUrl100,
      'AlbumName':element.collectionName,
      'ArtistName':element.artistName,
      'Price':element.collectionPrice
    }
    if(element.kind === 'feature-movie'){
      moviesArray.push(content)
    }
    if(element.kind === 'song'){
      songsArray.push(content)
    }
  });
  return <Box>
    <form>
      <Typography gutterBottom variant='h4' component='div'>
        Feature Movie
      </Typography>
      <Stack direction = 'row' spacing={2}>
        {moviesArray.map((movie) => {
          return <ContentCard
            imageUrl={movie.ImageUrl}
            albumName = {movie.AlbumName}
            artistName = {movie.ArtistName}
            Price = {movie.Price}
          />
        })}
      </Stack>
    </form>
    <form>
      <Typography gutterBottom variant='h4' component='div'>
        Songs
      </Typography>
      <Stack direction = 'row' spacing={2}>
        {songsArray.map((song) => {
          return <ContentCard
            imageUrl={song.ImageUrl}
            albumName = {song.AlbumName}
            artistName = {song.ArtistName}
            Price = {song.Price}
          />
        })}
      </Stack>
    </form>
  </Box>
}
export default ContentOrganizer