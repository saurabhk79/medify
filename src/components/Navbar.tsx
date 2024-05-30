import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

import { navMenuData } from "../config";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  return (
    <Box style={{ background: "var(--color-bgc)" }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        className="container"
        height={80}
      >
        <Logo />

        <Stack direction={"row"} spacing={3} alignItems={"center"}>
          {navMenuData.map((data, idx: number) => (
            <Typography key={idx} className="">
              {data}
            </Typography>
          ))}
          <Button variant="contained">My Bookings</Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Navbar;
