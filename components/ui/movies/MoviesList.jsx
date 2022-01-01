import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Container, Grid, Typography, Paper, Box } from "@mui/material";

import CardComponent from "../../shared/cards/CardComponent";
import DetailsModal from "../../shared/modals/DetailsModal";
const MoviesList = ({ movies }) => {
  const [movieDetail, setMovieDetail] = useState({});
  const [showModal, setShowModal] = useState(false);

  const header = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#fff",
    margin: "2% 0",
  };

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const findMovie = (id) => {
    const movie = movies.find((movie) => movie.id === id);
    setMovieDetail(movie);
    handleShowModal();
  };
  return (
    <Container style={{ marginTop: "20px" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" style={header}>
          Imdb Top 20 Movies
        </Typography>
        <Grid container spacing={2}>
          {movies?.slice(0, 20)?.map((movie, index) => (
            <Grid
              item
              key={index}
              item
              xs={12}
              sm={12}
              md={3}
              onClick={() => findMovie(movie.id)}
            >
              <CardComponent movie={movie} />
            </Grid>
          ))}
        </Grid>
      </Box>
      {showModal && (
        <DetailsModal
          showModal={showModal}
          close={handleCloseModal}
          details={movieDetail}
        />
      )}
    </Container>
  );
};

export default MoviesList;
