import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function MultiActionAreaCard() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image="https://dummyimage.com/600x600/000/fff"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Food Store
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Food nourishes, delights, and sustains us; a diverse palette of
              flavors, cultures, and memories shared worldwide.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image="https://dummyimage.com/600x600/000/fff"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Food Store
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Food nourishes, delights, and sustains us; a diverse palette of
              flavors, cultures, and memories shared worldwide.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image="https://dummyimage.com/600x600/000/fff"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Food Store
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Food nourishes, delights, and sustains us; a diverse palette of
              flavors, cultures, and memories shared worldwide.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
