import { Box, Stack, Typography, CardContent, Card } from "@mui/material";
import React from "react";

import labIcon from "../assets/lab.svg";
import doctorIcon from "../assets/doctor.svg";
import ambulanceIcon from "../assets/Ambulance.svg";
import capsuleIcon from "../assets/Capsule.svg";
import hospitalIcon from "../assets/Hospital.svg";
import Search from "./Search";

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
      <Search />

      <h3>You may be looking for</h3>

      <Stack direction={"row"} spacing={4} justifyContent={"center"}>
        {cardData.map((data, idx) => {
          return (
            <Card sx={{ minWidth: 120 }} key={idx}>
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
