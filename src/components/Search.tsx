import React, { useEffect, useState } from "react";
import { Stack, TextField, Autocomplete, Button } from "@mui/material";
import { config } from "../config";

const Search: React.FC = () => {
  const [fetchedData, setFetchedData] = useState({
    state: [],
    city: [],
  });
  const [formData, setFormData] = useState({
    state: "",
    city: "",
  });
  const [loading, setLoading] = useState({
    stateLoading: true,
    cityLoading: true,
  });

  const fetchStates = async () => {
    try {
      setLoading((prevState) => ({ ...prevState, stateLoading: true }));

      const res = await fetch(config.baseURL + "states");
      const data = await res.json();

      setFetchedData((prevState) => ({ ...prevState, state: data }));

      setLoading((prevState) => ({ ...prevState, stateLoading: false }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchStates();
  }, []);

  const fetchCities = async (stateName: string) => {
    try {
      setLoading((prevState) => ({ ...prevState, cityLoading: true }));

      const res = await fetch(config.baseURL + "cities/Alaska");
      const data = await res.json();

      console.log(data);

      setFetchedData((prevState) => ({ ...prevState, city: data }));

      setLoading((prevState) => ({ ...prevState, cityLoading: false }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCities(formData.state);
  }, [formData.state]);

  return (
    <Stack direction={"row"} spacing={2} justifyContent={"flex-end"}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        disabled={loading.stateLoading}
        style={{ width: "275px" }}
        options={fetchedData.state}
        renderInput={(params) => (
          <TextField
            {...params}
            label="State"
            disabled={loading.stateLoading}
          />
        )}
      />

      <Autocomplete
        id="free-solo-demo"
        freeSolo
        style={{ width: "275px" }}
        options={fetchedData?.city}
        disabled={loading.cityLoading}
        renderInput={(params) => (
          <TextField {...params} label="City" disabled={loading.cityLoading} />
        )}
      />

      <Button variant="contained">Search</Button>
    </Stack>
  );
};

export default Search;
