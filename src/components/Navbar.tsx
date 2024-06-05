import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React from "react";

import { navMenuData } from "../config";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("lg"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box style={{ background: "var(--color-bgc)" }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        className="container"
        height={80}
        px={2}
      >
        <Logo />

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              hii
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <List>
                {navMenuData.map((data, idx: number) => (
                  <ListItem button key={idx}>
                    <ListItemText primary={data} />
                  </ListItem>
                ))}
                <ListItem button>
                  <Button variant="contained">My Bookings</Button>
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <Stack direction={"row"} spacing={3} alignItems={"center"}>
            {navMenuData.map((data, idx: number) => (
              <Typography key={idx} className="">
                {data}
              </Typography>
            ))}
            <Button variant="contained">My Bookings</Button>
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

export default Navbar;
