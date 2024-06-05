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
import SlotBox from "./SlotBox";

interface BookingCardProps {
  isBooked: boolean;
  timing?: string;
  date?: string;
}

const BookingCard: React.FC<BookingCardProps> = ({
  isBooked,
  date,
  timing,
}) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <Card>
      <CardContent>
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
              Fortis Hospital Richmond Road
            </Typography>
            <Typography fontWeight={700}>Banglore, Karnataka</Typography>

            <Typography>
              Smilessence Center for Advanced Dentistry + 1 more
            </Typography>
            <Typography>
              <span style={{ color: "green", fontWeight: "700" }}>FREE</span>
              <span className="deleted-text"> ₹500</span> Consultation fee at
              clinic
            </Typography>

            <Box
              width={40}
              bgcolor={"green"}
              color={"white"}
              borderRadius={1}
              paddingX={1}
            >
              5
            </Box>
          </Box>

          <Stack justifyContent={"space-between"}>
            <Stack direction={"row"} spacing={1}>
              {isBooked && (
                <>
                  <Button variant="outlined">{timing}</Button>
                  <Button variant="outlined" color="success">
                    {date}
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
                  onClick={(e: React.MouseEvent) => setToggle(!toggle)}
                >
                  {toggle ? "Cancel" : "Book FREE Center Visit"}
                </Button>
              </Stack>
            )}
          </Stack>
        </Stack>

        {!toggle ? <></> : <SlotBox />}
      </CardContent>
    </Card>
  );
};

export default BookingCard;
