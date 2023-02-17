import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";

function ContentCard(){
  return <Box maxWidth="170px">
    <Card>
      <CardMedia
        sx={{ width: 150, padding:1, borderRadius:4 }}
        component='img'
        image="https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/f3/ee/b3/f3eeb3ff-ca32-273a-15aa-709bdfa64367/mzi.izwiyqez.jpg/100x100bb.jpg"
        alt='Test Image'
      />
      <CardContent>
        <Typography gutterBottom variant='h6' component='div'>
          This Bike Is a Pipe Bomb
        </Typography>
        <Typography gutterBottom variant='body2' component='div'>
          Jack Johnson
        </Typography>
      </CardContent>
    </Card>
  </Box>
}

export default ContentCard;