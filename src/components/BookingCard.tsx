import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

import bookingCardImage from "../assets/Booking-card-image.png";
import verified from "../assets/verified.svg";

interface BookingCardProps {
  isBooked: boolean;
}

const BookingCard: React.FC<BookingCardProps> = ({ isBooked }) => {
  return (
    <Card>
      <CardContent>
        <Stack direction={"row"} spacing={2}>
          <Box>
            <Box className="booking-card-img">
              <img src={bookingCardImage} alt="booking card image" />
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
            <Typography>FREE <span className="deleted-text">₹500</span> Consultation fee at clinic</Typography>

            <Typography>5</Typography>
          </Box>

          <Stack justifyContent={"space-between"}>
            <Stack direction={"row"} spacing={1}>
              {isBooked && (
                <>
                  <Button variant="outlined">10:30 AM</Button>
                  <Button variant="outlined" color="success">20 April, 2024</Button>
                </>
              )}
            </Stack>

            <Stack>
              <Typography textAlign={"center"} fontWeight={700}>Available Today</Typography>
              <Button variant="contained">Book FREE Center Visit</Button>
            </Stack>
          </Stack>
        </Stack>

        <Box></Box>
      </CardContent>
    </Card>
  );
};

export default BookingCard;
