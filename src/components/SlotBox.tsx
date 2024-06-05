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
import { hospitalDataInterface } from "../pages/Bookings";

interface SlotBoxProps {
  hospitalData: hospitalDataInterface;
}
const SlotBox: React.FC<SlotBoxProps> = ({hospitalData}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const generateTabsData = () => {
    const tabs = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      const dateString = currentDate.toISOString().split("T")[0];

      let date;
      if (i === 0) {
        date = "Today";
      } else if (i === 1) {
        date = "Tomorrow";
      } else {
        date = dateString;
      }

      tabs.push({ date, text: "11 Slots Remaining" });
    }
    return tabs;
  };

  const tabsData = generateTabsData();

  const handleBooking = (timing: string) => {
    const newBooking = { timing, date: tabsData[value].date, ...hospitalData };

    console.log(newBooking)
    const bookings = localStorage.getItem("bookings");

    if (typeof bookings === "string") {
      const bookingsData = JSON.parse(bookings);
      const newBookingData = [...bookingsData, newBooking];
      localStorage.setItem("bookings", JSON.stringify(newBookingData));
    }else {
      localStorage.setItem("bookings", JSON.stringify([newBooking]));
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
                <Box textAlign={"center"}>
                  <Typography fontSize={14}>{tab.date}</Typography>
                  <Typography fontSize={10}>{tab.text}</Typography>
                </Box>
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
  handleBooking: (timing: string) => void;
}

interface SlotTimingInterface {
  Morning: { timings: string[] };
  Afternoon: { timings: string[] };
  Evening: { timings: string[] };
}

const slotTiming: SlotTimingInterface = {
  Morning: {
    timings: ["11:30 AM"],
  },
  Afternoon: {
    timings: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
  },
  Evening: {
    timings: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  },
};

const Timings: React.FC<TimingsProps> = ({ handleBooking }) => {
  return (
    <div>
      {Object.entries(slotTiming).map(([key, value], idx: number) => {
        return (
          <Stack key={idx} direction={"row"} spacing={4} marginY={2}>
            <Typography>{key}</Typography>
            <Stack direction={"row"} flexWrap={"wrap"} spacing={1}>
              {value.timings.map((timing: string, timingIdx: number) => (
                <Button
                  key={timingIdx}
                  variant={"outlined"}
                  onClick={() => handleBooking(timing)}
                >
                  {timing}
                </Button>
              ))}
            </Stack>

            <Divider />
          </Stack>
        );
      })}
    </div>
  );
};
