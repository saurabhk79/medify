import {
  Box,
  Button,
  Divider,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";

const SlotBox: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // Function to generate the tabs data for the next 7 days
  const generateTabsData = () => {
    const tabs = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      const dateString = currentDate.toISOString().split("T")[0];

      let text;
      if (i === 0) {
        text = "Today";
      } else if (i === 1) {
        text = "Tomorrow";
      } else {
        text = dateString;
      }

      tabs.push({ date: dateString, text });
    }
    return tabs;
  };

  const tabsData = generateTabsData();

  const handleBooking = (timing: string) => {
    const newBooking = { timing, date: tabsData[value].text };

    const bookings = localStorage.getItem("bookings");

    if (typeof bookings === "string") {
      const bookingsData = JSON.parse(bookings);
      const newBookingData = [...bookingsData, newBooking];
      localStorage.setItem("bookings", JSON.stringify(newBookingData));
    }
  };

  return (
    <div>
      <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "background.paper" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {tabsData.map((tab, index) => (
            <Tab
              key={index}
              label={
                <div style={{ textAlign: "center" }}>
                  <div>{tab.date}</div>
                  <div>{tab.text}</div>
                </div>
              }
            />
          ))}
        </Tabs>
      </Box>
      <Timings handleBooking={handleBooking} />
    </div>
  );
};

export default SlotBox;

interface TimingsProps {
  handleBooking ?: (timing: string) => void;
}

const Timings: React.FC<TimingsProps> = ({ }) => {
  return (
    <div>
      <Stack direction={"row"} spacing={3}>
        <Typography>Morning</Typography>
        <Stack flexWrap={"wrap"}>
          <Button variant={"outlined"}>11:30 AM</Button>
        </Stack>
      </Stack>
      <Divider />
      <Stack>
        <Typography>Afternoon</Typography>
        <Stack flexWrap={"wrap"} spacing={2}>
          <Button variant={"outlined"}>12:00 AM</Button>
          <Button variant={"outlined"}>12:30 AM</Button>
          <Button variant={"outlined"}>01:30 AM</Button>
          <Button variant={"outlined"}>02:00 AM</Button>
          <Button variant={"outlined"}>02:30 AM</Button>
        </Stack>
      </Stack>
      <Divider />{" "}
      <Stack>
        <Typography>Evening</Typography>
        <Stack flexWrap={"wrap"}>
          <Button variant={"outlined"}>06:00 AM</Button>
          <Button variant={"outlined"}>06:30 AM</Button>
          <Button variant={"outlined"}>07:00 AM</Button>
          <Button variant={"outlined"}>07:30 AM</Button>
        </Stack>
      </Stack>
    </div>
  );
};
