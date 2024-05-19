import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const Download: React.FC = () => {
  return (
    <div>
      <Stack direction={"row"}>
        {/* images here */}

        <Box>
          <Typography>
            Download the{" "}
            <span style={{ color: "var(--color-primary)" }}>Medify</span> App
          </Typography>
          <Typography>Get the link to download the app</Typography>

          <Stack>
            <div>+91</div>
            <input type="tel" />
            <Button variant="contained" />
          </Stack>

          <Stack direction={"row"}>
            {/* images here */}
          </Stack>
        </Box>
      </Stack>
    </div>
  );
};

export default Download;
