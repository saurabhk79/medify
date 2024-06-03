import {
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

import caringOne from "../assets/caring-image1.png";
import caringTwo from "../assets/caring-image2.png";
import callIcon from "../assets/call.svg";
import verifiedIcon from "../assets/verified.svg"

const Caring: React.FC = () => {
  return (
    <Stack className="caring">
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        className="container"
        style={{minHeight: "90%"}}
        paddingY={12}
      >
        <Box style={{ position: "relative" }}>
          <img src={caringOne} alt="caring1" className="caring-image-1" />
          <img src={caringTwo} alt="caring2" className="caring-image-2" />

          <Card className="caring-card" sx={{ width: "250px" }}>
            <CardContent>
              <Stack direction={"row"} spacing={2} alignItems={"center"}>
                <img src={callIcon} alt="call" width={50} />
                <Typography>Free Consultation</Typography>
              </Stack>
              <Typography>Consultation with the best</Typography>
            </CardContent>
          </Card>
        </Box>

        <Box style={{ width: "50%" }}>
          <Typography style={{ color: "var(--color-primary)" }}>
            HELPING PATIENTS FROM AROUND THE GLOBE!!
          </Typography>
          <Typography variant="h3">
            Patient
            <span style={{ color: "var(--color-primary)" }}> Caring </span>
          </Typography>
          <Typography variant="body1">
            Our goal is to deliver quality of care in a courteous, respectful,
            and compassionate manner. We hope you will allow us to care for you
            and strive to be the first and best choice for healthcare.
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon><img src={verifiedIcon} alt="" /></ListItemIcon>
              <ListItemText primary="Stay Updated About Your Health" />
            </ListItem>

            <ListItem>
              <ListItemIcon><img src={verifiedIcon} alt="" /></ListItemIcon>
              <ListItemText primary="Check Your Results Online" />
            </ListItem>

            <ListItem>
              <ListItemIcon><img src={verifiedIcon} alt="" /></ListItemIcon>
              <ListItemText primary="Manage Your Appointments" />
            </ListItem>
          </List>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Caring;
