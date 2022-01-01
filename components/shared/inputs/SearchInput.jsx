import { Container, FormControl, Input, TextField } from "@mui/material";
import React, { useState } from "react";
import classes from "./inputs.module.css";
const SearchInput = ({ search, change, submit }) => {
  return (
    <form className={classes.form} onSubmit={submit}>
      <input
        type="text"
        placeholder="Search"
        onChange={change}
        value={search}
      />
      <button type="submit" disabled={search.length === 0 && true}>
        Search
      </button>
    </form>
  );
};

export default SearchInput;
