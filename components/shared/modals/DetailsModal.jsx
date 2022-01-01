import { Avatar, Modal, Typography } from "@mui/material";

import { Box } from "@mui/system";
import React from "react";

const DetailsModal = ({ showModal, close, details }) => {
  const style = {
    width: 600,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    bgcolor: "#dfdfdf",

    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
    ["@media (max-width:760px) and (min-width:300px)"]: {
      width: "90%",
    },
  };
  const boxStyle = {
    display: "flex",
    flexFlow: "row",
    justifyContent: "flex-start",
    margin: "10px 0px",
  };
  const avatarStyle = {
    boxShadow: "0px 0px 10px #121212",
    marginRight: "10px",
  };
  return (
    <Modal open={showModal} onClose={close}>
      <Box sx={style}>
        <Box style={boxStyle}>
          <Avatar src={details.image} style={avatarStyle} />
          <Typography variant="h4">{details.title}</Typography>
        </Box>

        <Typography my={2} variant="h6">
          {!details.year ? details.description : details.year}
        </Typography>
        <Typography variant="body1">{details.crew && details.crew}</Typography>
        <Typography variant="body1">
          {details.imDbRating && `IMDb Rating: ${details.imDbRating} / 10`}
        </Typography>
      </Box>
    </Modal>
  );
};

export default DetailsModal;
