import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import BookingCard from "../components/BookingCard";

import ads from "../assets/Ads.png";
import Search, { SearchFormData } from "../components/Search";
import { config } from "../config";

const Bookings: React.FC = () => {
  const [hospitals, setHospitals] = useState([]);

  const fetchHospitals = async () => {
    try {
      const storage = localStorage.getItem("search");
      if (typeof storage === "string") {
        const searchData: SearchFormData = JSON.parse(storage);

        const res = await fetch(
          `${config.baseURL}data?state=${searchData.state}&city=${searchData.city}`
        );
        const data = await res.json();

        if (res.ok) setHospitals(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchHospitals();
  }, []);
  return (
    <div>
      <Box className="colored-box">
        <Stack
          className="container"
          justifyContent={"flex-end"}
          style={{ height: "100%" }}
        >
          <Search />
        </Stack>
      </Box>

      <Box className="container" marginTop={16}>
        <Box>
          <Typography fontWeight={700}>
            15 medical centers available in Alaska
          </Typography>
          <Typography>
            Book appointments with minimum wait-time & verified doctor details
          </Typography>
        </Box>
      </Box>

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        spacing={4}
        flexGrow={1}
        className="container"
        marginBottom={6}
      >
        <Stack spacing={4}>
          {hospitals.map((_, idx) => {
            return <BookingCard key={idx} isBooked={false} />;
          })}
        </Stack>

        <Box>
          <img src={ads} alt="ads" />
        </Box>
      </Stack>
    </div>
  );
};

export default Bookings;
