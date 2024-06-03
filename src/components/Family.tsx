import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";

import hearthand from "../assets/hearthand.svg";
import hospital from "../assets/Hospital.svg";
import laboratory from "../assets/lab.svg";

const Family: React.FC = () => {
  return (
    <Stack className="family">
      <Stack
        direction={"row"}
        className="container"
        alignItems={"center"}
        spacing={4}
        marginY={4}
      >
        <Box>
          <Typography style={{ color: "var(--color-primary)" }}>
            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
          </Typography>
          <Typography
            style={{ color: "var(--color-footer)" }}
            variant="h3"
            fontWeight={700}
          >
            Our Families
          </Typography>
          <Typography lineHeight={2} color={"gray"}>
            We will work with you to develop individualised care plans,
            including management of chronic diseases. If we cannot assist, we
            can provide referrals or advice about the type of practitioner you
            require. We treat all enquiries sensitively and in the strictest
            confidence.
          </Typography>
        </Box>

        <Stack spacing={4} textAlign={"center"} alignSelf={"flex-start"}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Box
                className="caring-icon"
                style={{ background: "var(--color-bgc)" }}
              >
                <img src={hearthand} alt="heart hand" />
              </Box>

              <Typography
                variant="h3"
                fontWeight={700}
                marginBottom={2}
                style={{ color: "var(--color-footer)" }}
              >
                5000+
              </Typography>
              <Typography color={"gray"}>Happy Patients</Typography>
            </CardContent>
          </Card>

          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Box className="caring-icon">
                <img src={laboratory} alt="laboratory" />
              </Box>

              <Typography
                variant="h3"
                fontWeight={700}
                marginBottom={2}
                style={{ color: "var(--color-footer)" }}
              >
                1000+
              </Typography>
              <Typography color={"gray"}>Laboratories</Typography>
            </CardContent>
          </Card>
        </Stack>

        <Stack spacing={4} textAlign={"center"} alignSelf={"flex-end"}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Box className="caring-icon">
                <img src={hospital} alt="hospital" />
              </Box>

              <Typography
                variant="h3"
                fontWeight={700}
                marginBottom={2}
                style={{ color: "var(--color-footer)" }}
              >
                2000+
              </Typography>
              <Typography color={"gray"}>Hospitals</Typography>
            </CardContent>
          </Card>

          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Box className="caring-icon">
                <img src={hospital} alt="hospital" />
              </Box>

              <Typography
                variant="h3"
                fontWeight={700}
                marginBottom={2}
                style={{ color: "var(--color-footer)" }}
              >
                700+
              </Typography>
              <Typography>Experts</Typography>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Family;
