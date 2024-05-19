import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import SearchBox from "./SearchBox";

// import heroImage from "../assets/hero_image.png"

const Hero: React.FC = () => {
  return (
    <Box className="hero">
      <Stack
        direction={"row"}
        // alignItems={"center"}
        justifyContent={"space-between"}
        className="container"
      >
        <Stack>
          <Typography variant="h5">Skip the travel! Find Online</Typography>

          <Typography variant="h2">
            Medical
            <span style={{ color: "var(--color-primary)" }}>Centers</span>
          </Typography>

          <Typography>
            Connect instantly with a 24x7 specialist or choose to <br /> video
            visit a particular doctor.
          </Typography>

          <Box>
            <Button variant="contained" style={{ color: "white" }}>
              My Bookings
            </Button>
          </Box>
        </Stack>

        {/* <img src={heroImage} alt="hero-image" /> */}

        <SearchBox />
      </Stack>
    </Box>
  );
};

export default Hero;
