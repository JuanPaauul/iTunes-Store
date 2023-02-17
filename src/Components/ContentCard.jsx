import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";

function ContentCard({imageUrl, albumName, artistName, Price, isAlbum}){
  return <Box maxWidth="170px">
    <Card>
      <CardMedia
        sx={{ width: 150, padding:1, borderRadius:4 }}
        component='img'
        image={imageUrl}
        alt={albumName + ' artwork'}
      />
      <CardContent>
        <Typography gutterBottom variant='h6' component='div'>
          {albumName}
        </Typography>
        <Typography gutterBottom variant='body2' component='div'>
          {artistName}
        </Typography>
        <Typography gutterBottom variant='body2' component='div' align="right">
          {Price}
        </Typography>
      </CardContent>
    </Card>
  </Box>
}

export default ContentCard;