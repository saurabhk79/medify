import { Button, Divider, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

interface bookingInterface {
  timing: string;
  date: string;
}

const SlotBox: React.FC = () => {
  const [booking, setBooking] = useState<bookingInterface[]>([]);

  useEffect(() => {
    const local = localStorage.getItem("booking");

    if (typeof local === "string") {
      const allBookings = JSON.parse(local);

      setBooking(allBookings);
    }
  }, []);

  const handleNewBooking = (timing: string, date: string) => {
    const newBooking = {
      timing,
      date,
    };

    setBooking([...booking, newBooking]);
    localStorage.setItem("booking", JSON.stringify(booking));
  };
  return (
    <div>
      <Timings handleNewBooking={handleNewBooking} />
    </div>
  );
};

export default SlotBox;

interface SlotTimingInterface {
  Morning: { timings: string[] };
  Afternoon: { timings: string[] };
  Evening: { timings: string[] };
}

interface TimingsProps {
  handleNewBooking: (timing: string, date: string) => void;
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

const Timings: React.FC<TimingsProps> = ({ handleNewBooking }) => {
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
                  onClick={() => handleNewBooking(timing, "20 April 2024")}
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
