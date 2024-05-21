import { Box, Stack, Typography } from "@mui/material";
import React from "react";

import ads from "../assets/Ads.png";
import BookingCard from "../components/BookingCard";
import BookingSearch from "../components/BookingSearch";

const MyBookings: React.FC = () => {
  return (
    <Box className="my-bookings-page">
      <Box className="colored-box">
        <Stack
          className="container"
          justifyContent={"flex-end"}
          style={{ height: "100%" }}
        >
          <Typography variant="h4" color={"white"}>
            My Bookings
          </Typography>
          <BookingSearch />
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

        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          spacing={4}
          flexGrow={1}
        >
          <Stack spacing={4}>
            {Array(5)
              .fill(0)
              .map((_, idx) => {
                return <BookingCard key={idx} isBooked={true} />;
              })}
          </Stack>

          <Box>
            <img src={ads} alt="ads" />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default MyBookings;
