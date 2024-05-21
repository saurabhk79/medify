import React from "react";
import { Stack, TextField, Autocomplete, Button } from "@mui/material";

const Search: React.FC = () => {
  return (
    <Stack direction={"row"} spacing={2} justifyContent={"flex-end"}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        style={{ width: "275px" }}
        // options={top100Films.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="State" />}
      />

      <Autocomplete
        id="free-solo-demo"
        freeSolo
        style={{ width: "275px" }}
        // options={top100Films.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="City" />}
      />

      <Button variant="contained">Search</Button>
    </Stack>
  );
};

export default Search;
