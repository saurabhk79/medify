import { Button, Stack } from "@mui/material";
import React from "react";

import { navMenuData } from "../config";

const Navbar: React.FC = () => {
  return (
    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} className="container" height={60}>
      <div>Logo</div>

      <Stack direction={"row"} spacing={3} alignItems={"center"}>
        {navMenuData.map((data, idx: number) => (
          <span key={idx} className="">{data}</span>
        ))}
        <Button variant="contained">My Bookings</Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
