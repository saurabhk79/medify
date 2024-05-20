import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

interface BookingCardProps {
  isBooked: boolean;
}

const BookingCard: React.FC<BookingCardProps> = ({ isBooked }) => {
  return (
    <Card>
      <CardContent>
        {/* <img src="" alt="" /> */}
        <div></div>

        <Box>
          <Typography>Fortis Hospital Richmond Road</Typography>
          <Typography>Banglore, Karnataka</Typography>

          <Typography>
            Smilessence Center for Advanced Dentistry + 1 more
          </Typography>
          <Typography>FREE ₹500 Consultation fee at clinic</Typography>

          <Typography>5</Typography>
        </Box>

        <Stack>
          <Stack>
            {isBooked && (
              <>
                <Button>10:30 AM</Button>
                <Button>20 April, 2024</Button>
              </>
            )}
          </Stack>

          <Stack>
            <Typography>Available Today</Typography>
            <Button variant="contained">Book FREE Center Visit</Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default BookingCard;
