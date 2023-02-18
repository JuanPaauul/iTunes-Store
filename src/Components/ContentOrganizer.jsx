import { Stack, Typography } from "@mui/material"
import { Box } from "@mui/system"
import ContentCard from "./ContentCard"

function ContentOrganizer({songsArray = [], moviesArray = []}){
  return <Box sx={{padding:'150px'}}>
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
        <Stack direction='column'>
          {songsArray.length >= 7?
          <img
            alt="See more"
            src="https://static.thenounproject.com/png/2623476-200.png"
            width="200px"
            height="200px"
          />:null
          }
          <Typography gutterBottom variant="h6">
            See more
          </Typography>
        </Stack>
      </Stack>
    </form>
  </Box>
}
export default ContentOrganizer