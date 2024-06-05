import { Button, Card, CardContent, Stack, TextField } from "@mui/material";
import React from "react";

const BookingSearch: React.FC = () => {
  return (
    <Card className="not-landing-page-search" sx={{ width: "450px" }}>
      <CardContent>
        <Stack direction={"row"} spacing={2}>
          <TextField type="text" label="Search By Hospital" fullWidth size="small" />
          <Button variant={"contained"} size="small">Search</Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default BookingSearch;
