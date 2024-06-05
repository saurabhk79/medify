import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import ads from "../assets/Ads.png";
import BookingCard from "../components/BookingCard";
import BookingSearch from "../components/BookingSearch";
import { hospitalDataInterface } from "./Bookings";

const MyBookings: React.FC = () => {
  const [bookingData, setBookingData] = useState<hospitalDataInterface[]>([]);

  useEffect(() => {
    const bookingStorage = localStorage.getItem("bookings");

    if (typeof bookingStorage === "string") {
      const bookings = JSON.parse(bookingStorage);
      setBookingData(bookings);
    }
  }, []);
  return (
    <Box className="my-bookings-page">
      <Box className="colored-box container" position={"relative"}>
        <Stack
          className="container"
          direction={"row"}
          alignItems={"flex-end"}
          style={{ height: "100%" }}
        >
          <Typography variant="h4" color={"white"} marginBottom={1} marginLeft={4}>
            My Bookings
          </Typography>
          <BookingSearch />
        </Stack>
      </Box>

      <Box className="container" marginTop={16} paddingBottom={6}>
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
            {bookingData.map((booking, idx) => {
              return <BookingCard key={idx} isBooked={true} data={booking} />;
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
