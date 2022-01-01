import React from "react";
import { Typography, Card, CardMedia, CardContent } from "@mui/material";

const CardComponent = ({ movie }) => {
  const cardStyle = {
    height: "620px",
    width: "100%",
    boxShadow: "0px 0px 8px #888",
    cursor: "pointer",
  };
  const mediaStyle = {
    height: "450px",
    width: "100%",
  };
  const cardContentStyle = {
    height: "100px",
  };

  return (
    <Card style={cardStyle}>
      <CardMedia
        component="img"
        height="200"
        image={movie.image}
        alt={movie.title}
        style={mediaStyle}
      />
      <CardContent style={cardContentStyle}>
        <Typography variant="h6">
          {movie.title} ({!movie.year ? movie.description : movie.year})
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
