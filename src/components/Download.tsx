import { Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";

import appleStore from "../assets/apple_store.png";
import googlePlay from "../assets/google_play.png";

import mobileOut from "../assets/mobile-out.png";
import mobileIn from "../assets/mobile-in.png";

const Download: React.FC = () => {
  return (
    <div>
      <Stack direction={"row"} className="container" marginBottom={4}>
        <Stack style={{ width: "50%" }} position={"relative"}>
          <div className="small-mobile">
            <Mobile height={300} />
          </div>
          <div className="large-mobile">
            <Mobile height={350} />
          </div>
        </Stack>

        <Stack>
          <Typography variant="h4" marginBottom={2}>
            Download the <br />
            <span style={{ color: "var(--color-primary)" }}>Medify</span> App
          </Typography>
          <Typography fontWeight={500}>
            Get the link to download the app
          </Typography>

          <Stack direction={"row"} className="contact">
            <Stack direction={"row"}>
              <div className="tel-code">+91</div>
              <Divider />
              <input type="tel" />
            </Stack>
            <Button variant="contained">Send SMS</Button>
          </Stack>

          <Stack direction={"row"} spacing={2} marginTop={6}>
            <img src={appleStore} alt="Apple Store" height={50} />
            <img src={googlePlay} alt="Google Play" height={50} />
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default Download;

interface MobileProps {
  height: number;
}
const Mobile: React.FC<MobileProps> = ({ height }) => {
  return (
    <div className="mobile">
      <img
        src={mobileIn}
        alt="mobile-in"
        className="mobile-in"
        style={{ position: "absolute" }}
        height={height}
      />
      <img
        src={mobileOut}
        alt="mobile-out"
        className="mobile-out"
        style={{ position: "absolute" }}
        height={height + 70}
      />
    </div>
  );
};
