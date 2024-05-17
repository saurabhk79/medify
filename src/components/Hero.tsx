import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const Hero: React.FC = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      className="container"
    >
      <Stack>
        <Typography variant="h5">Skip the travel! Find Online</Typography>

        <Typography variant="h2">
          Medical <span style={{ color: "var(--color-primary)" }}>Centers</span>
        </Typography>

        <Typography variant="subtitle2">
          Connect instantly with a 24x7 specialist or choose to <br /> video
          visit a particular doctor.
        </Typography>

        <Box>
          <Button variant="contained" style={{ color: "white" }}>
            My Bookings
          </Button>
        </Box>
      </Stack>

      <p>Image here</p>
    </Stack>
  );
};

export default Hero;
