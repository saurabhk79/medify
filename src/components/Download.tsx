import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";

import appleStore from "../assets/apple_store.png";
import googlePlay from "../assets/google_play.png";

const Download: React.FC = () => {
  return (
    <div>
      <Stack direction={"row"}>
        {/* images here */}

        <Box>
          <Typography variant="h3" marginBottom={2}>
            Download the <br />
            <span style={{ color: "var(--color-primary)" }}>Medify</span> App
          </Typography>
          <Typography fontWeight={500}>
            Get the link to download the app
          </Typography>

          <Stack direction={"row"}>
            <Stack direction={"row"}>
              <div>+91</div>
              <Divider />
              <input type="tel" />
            </Stack>
            <Button variant="contained">Send SMS</Button>
          </Stack>

          <Stack direction={"row"} spacing={2} marginTop={6}>
            <img src={appleStore} alt="Apple Store" />
            <img src={googlePlay} alt="Google Play" />
          </Stack>
        </Box>
      </Stack>
    </div>
  );
};

export default Download;
