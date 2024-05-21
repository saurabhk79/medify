import {
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";

const BookingSearch: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Stack direction={"row"} spacing={2} > 
          <TextField type="text" label="Search By Hospital" fullWidth />
            <Button variant={"contained"}>Search</Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default BookingSearch;
