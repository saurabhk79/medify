import React, { useEffect, useState } from "react";
import { Stack, TextField, Autocomplete, Button } from "@mui/material";
import { config } from "../config";
import { useNavigate } from "react-router-dom";

export interface SearchFormData {
  state: string;
  city: string;
}

interface FetchedData {
  state: string[];
  city: string[];
}

interface LoadingData {
  stateLoading: boolean;
  cityLoading: boolean;
}
const Search: React.FC = () => {
  const [fetchedData, setFetchedData] = useState<FetchedData>({
    state: [],
    city: [],
  });
  const [formData, setFormData] = useState<SearchFormData>({
    state: "",
    city: "",
  });
  const [loading, setLoading] = useState<LoadingData>({
    stateLoading: true,
    cityLoading: true,
  });

  const navigate = useNavigate();

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

      const res = await fetch(config.baseURL + "cities/" + stateName);
      const data = await res.json();

      console.log(data);

      setFetchedData((prevState) => ({ ...prevState, city: data }));

      setLoading((prevState) => ({ ...prevState, cityLoading: false }));
    } catch (err) {
      console.log(err);
    }
  };

  const seeSlots = async () => {
    const search = { ...formData };

    localStorage.setItem("search", JSON.stringify(search));
    navigate("/bookings");
  };

  return (
    <Stack direction={"row"} spacing={2} justifyContent={"flex-end"}>
      <Autocomplete
        id="state-select"
        freeSolo
        value={formData.state}
        onChange={(_, newValue) => {
          setFormData((prevState) => ({ ...prevState, state: newValue || "" }));
          fetchCities(newValue || "");
        }}
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
        id="city-select"
        freeSolo
        value={formData.city}
        onChange={(_, newValue) => {
          setFormData((prevState) => ({ ...prevState, city: newValue || "" }));
        }}
        disabled={loading.cityLoading}
        style={{ width: "275px" }}
        options={fetchedData.city}
        renderInput={(params) => (
          <TextField {...params} label="City" disabled={loading.cityLoading} />
        )}
      />

      <Button
        variant="contained"
        onClick={seeSlots}
        disabled={loading.stateLoading || loading.cityLoading}      >
        Search
      </Button>
    </Stack>
  );
};

export default Search;
