import { Stack, Typography, CardContent, Card } from "@mui/material";
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

interface SearchBoxProps {
  justifyContent: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({justifyContent}) => {
  return (
    <Card className="search-box">
      <Stack direction={"row"} justifyContent={justifyContent}>
        <Search />
      </Stack>
      <h3>You may be looking for</h3>

      <Stack direction={"row"} spacing={4} justifyContent={"center"}>
        {cardData.map((data, idx) => {
          return (
            <Card sx={{ minWidth: 120 }} key={idx}>
              <CardContent>
                <img src={data.icon} alt={data.title} height={30} />

                <Typography marginTop={2}>{data.title}</Typography>
              </CardContent>
            </Card>
          );
        })}
      </Stack>
    </Card>
  );
};

export default SearchBox;
