import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const LoaderComponent = () => {
  const loaderStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };
  return (
    <Box style={loaderStyle}>
      <CircularProgress />
    </Box>
  );
};

export default LoaderComponent;
