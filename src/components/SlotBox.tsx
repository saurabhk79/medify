import { Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";

const SlotBox: React.FC = () => {
  return <div>
    <Timings />
  </div>;
};

export default SlotBox;

const Timings: React.FC = () => {
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
