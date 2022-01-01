import React from "react";
import { AppBar, Container, Toolbar, Typography, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import Link from "next/link";
const Navbar = () => {
  const toolBarStyle = {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
  };
  const buttonStyle = {
    color: "#fff",
  };
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="lg">
        <Toolbar style={toolBarStyle}>
          <Typography variant="h6">
            <Link href="/">Imdb Search</Link>
          </Typography>

          <Button style={buttonStyle}>
            <Link href="/search">
              <SearchIcon />
            </Link>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
