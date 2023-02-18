import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";

function ContentCard({imageUrl, albumName, artistName, Price, isAlbum = true}){
  let height = '400px';
  let imageHeight = '250px';
  if(!isAlbum){
    height = '300px';
    imageHeight = '150px';
  }
  return <Box maxWidth="170px">
    <Card sx={{ height: height }}>
      <CardMedia
        sx={{ width: 150, height:imageHeight, padding:1, borderRadius:4 }}
        component='img'
        image={imageUrl}
        alt={albumName + ' artwork'}
      />
      <CardContent width='150'>
        <Box sx={{height:80}}>
          <Typography gutterBottom variant='h6' component='div'>
            {albumName}
          </Typography>
          <Typography gutterBottom variant='body2' component='div'>
            {artistName}
          </Typography>
        </Box>
        <Typography gutterBottom variant='body2' component='div' align="right">
          {Price}
        </Typography>
      </CardContent>
    </Card>
  </Box>
}

export default ContentCard;