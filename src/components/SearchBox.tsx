import {
  Box,
  Stack,
  TextField,
  Autocomplete,
  Button,
  Typography,
  CardContent,
  Card,
} from "@mui/material";
import React from "react";

import labIcon from "../assets/lab.svg";
import doctorIcon from "../assets/doctor.svg";
import ambulanceIcon from "../assets/Ambulance.svg";
import capsuleIcon from "../assets/Capsule.svg";
import hospitalIcon from "../assets/Hospital.svg";

interface cardDataInterface {
  title: string;
  icon: string;
}
// Data for the cards
const cardData: cardDataInterface[] = [
  {
    title: "Doctors",
    icon: doctorIcon,
  },
  {
    title: "Labs",
    icon: labIcon,
  },
  {
    title: "Hospitals",
    icon: hospitalIcon,
  },
  {
    title: "Medical Store",
    icon: capsuleIcon,
  },
  {
    title: "Ambulance",
    icon: ambulanceIcon,
  },
];

const SearchBox: React.FC = () => {
    
  return (
    <Box className="search-box">
      <Stack direction={"row"} spacing={6} justifyContent={"flex-end"}>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          style={{width : "275px"}}
          // options={top100Films.map((option) => option.title)}
          renderInput={(params) => <TextField {...params} label="State" />}
        />

        <Autocomplete
          id="free-solo-demo"
          freeSolo
          style={{width : "275px"}}
          // options={top100Films.map((option) => option.title)}
          renderInput={(params) => <TextField {...params} label="City" />}
        />

        <Button variant="contained">Search</Button>
      </Stack>

      <h3>You may be looking for</h3>

      <Stack direction={"row"} spacing={4} justifyContent={"center"}>
        {cardData.map((data, idx) => {
          return (
            <Card sx={{ minWidth: 120 }} key={idx} >
              <CardContent>
              <img src={data.icon} alt={data.title} height={50} />

                <Typography>{data.title}</Typography>
              </CardContent>
            </Card>
          );
        })}
      </Stack>
    </Box>
  );
};

export default SearchBox;
