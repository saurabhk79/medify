import {
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import React from "react";

import labIcon from "../assets/lab.svg";
import stethoscopeIcon from "../assets/Stethoscope.svg";
import heartMonitorIcon from "../assets/Heart Rate Monitor.svg";
import bloodSampleIcon from "../assets/Blood Sample.svg";
import immuneIcon from "../assets/Immune.svg";
import heartRateIcon from "../assets/heart-rate.svg";
import xrayIcon from "../assets/X-Ray.svg";

interface cardDataInterface {
  title: string;
  icon: string;
}
// Data for the cards
const cardData: cardDataInterface[] = [
  {
    title: "Dentistry",
    icon: labIcon,
  },
  {
    title: "Primary Care",
    icon: stethoscopeIcon,
  },
  {
    title: "Cardiology",
    icon: heartRateIcon,
  },
  {
    title: "MRI Resonance",
    icon: heartMonitorIcon,
  },
  {
    title: "Blood Test",
    icon: bloodSampleIcon,
  },
  {
    title: "Piscologist",
    icon: immuneIcon,
  },
  {
    title: "Laboratory",
    icon: labIcon,
  },
  {
    title: "X-Ray",
    icon: xrayIcon,
  },
];

const Specialisation: React.FC = () => {
  return (
    <Box className="specialisation">
      <Stack
        className="container"
        justifyContent={"center"}
        textAlign={"center"}
      >
        <Typography
          variant="h3"
          style={{ color: "var(--color-footer)" }}
          fontWeight={700}
          marginY={8}
        >
          Find By Specialisation
        </Typography>

        <Grid container spacing={4} marginBottom={4}>
          {cardData.map((data, idx) => {
            return (
              <Grid item key={idx} lg={3} sm={6}>
                <Card>
                  <CardContent>
                    <img src={data.icon} alt={data.title} height={40} />

                    <Typography marginTop={2} style={{color: "gray"}}>{data.title}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        <Stack alignItems={"center"} justifyContent={"center"} marginBottom={4}>
          <Button variant="contained">View All</Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Specialisation;
