import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import bookingCardImage from "../assets/Booking-card-image.png";
import verified from "../assets/verified.svg";
import like from "../assets/Like.png";
import SlotBox from "./SlotBox";
import { hospitalDataInterface } from "../pages/Bookings";

interface BookingCardProps {
  isBooked: boolean;
  data: hospitalDataInterface;
}

const BookingCard: React.FC<BookingCardProps> = ({ isBooked, data }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <Card>
      <CardContent>
        <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
          <Stack direction={"row"} spacing={2}>
            <Box>
              <Box className="booking-card-img">
                <img
                  src={bookingCardImage}
                  alt="booking card image"
                  height={40}
                />
                <img src={verified} alt="verified" className="verified" />
              </Box>
            </Box>
            <Box>
              <Typography
                style={{ color: "var(--color-primary)" }}
                marginBottom={2}
                fontWeight={700}
                variant="h6"
              >
                {data["Hospital Name"]}
              </Typography>
              <Typography fontWeight={700}>
                {data.City}, {data.State}, {data["ZIP Code"]}
              </Typography>

              <Typography>{data["Hospital Type"]}</Typography>
              <Typography>
                <span style={{ color: "green", fontWeight: "700" }}>FREE</span>
                <span className="deleted-text"> ₹500</span> Consultation fee at
                clinic
              </Typography>

              <Stack
                width={40}
                direction={"row"}
                bgcolor={"green"}
                color={"white"}
                borderRadius={1}
                paddingX={1}
                alignItems={"center"}
              >
                <img src={like} alt="like" /> {data["Hospital overall rating"]}
              </Stack>
            </Box>
          </Stack>

          <Stack justifyContent={"space-between"}>
            <Stack direction={"row"} spacing={1}>
              {isBooked && (
                <>
                  <Button variant="outlined">{data.timing}</Button>
                  <Button variant="outlined" color="success">
                    {data.date}
                  </Button>
                </>
              )}
            </Stack>

            {!isBooked && (
              <Stack>
                <Typography
                  textAlign={"center"}
                  fontWeight={700}
                  color={"green"}
                >
                  Available Today
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => setToggle(!toggle)}
                >
                  {toggle ? "Cancel" : "Book FREE Center Visit"}
                </Button>
              </Stack>
            )}
          </Stack>
        </Stack>

        {!toggle ? <></> : <SlotBox hospitalData={data} />}
      </CardContent>
    </Card>
  );
};

export default BookingCard;
