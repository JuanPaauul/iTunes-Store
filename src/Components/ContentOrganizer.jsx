import { Stack, Typography } from "@mui/material"
import { Box } from "@mui/system"
import ContentCard from "./ContentCard"

function ContentOrganizer({songsArray = [], moviesArray = []}){
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
            Price = {movie.Price + ' $'}
          />
        })}
      </Stack>
    </form>
    <Box height='20px'></Box>
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
            Price = {song.Price + ' $'}
            isAlbum = {false}
          />
        })}
      </Stack>
    </form>
  </Box>
}
export default ContentOrganizer