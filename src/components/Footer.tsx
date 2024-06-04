import {
  Box,
  List,
  ListItem,
  ListItemText,
  Stack,
} from "@mui/material";
import React from "react";
import Logo from "./Logo";

const footer1: string[] = [
  "> About Us",
  "> Our Pricing",
  "> Our Gallery",
  "> Appointment",
  "> Privacy Policy",
];

const footer2: string[] = [
  "> Orthology",
  "> Neurology",
  "> Dental Care",
  "> Opthalmology",
  "> Cardiology",
];

const Footer: React.FC = () => {
  return (
    <Box className="footer">
      <Box className="container" marginTop={4}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack>
            <Logo />

            <div>{/* icons here */}</div>
          </Stack>

          <Stack direction={"row"} spacing={8}>
            <List>
              {footer1.map((item, idx) => (
                <ListItem key={idx}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>

            <List>
              {footer2.map((item: string, idx) => (
                <ListItem key={idx}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>

            <List>
              {footer1.map((item, idx) => (
                <ListItem key={idx}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
