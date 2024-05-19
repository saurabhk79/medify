import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";

const Family: React.FC = () => {
  return (
    <Box className="family">
      <Stack
        direction={"row"}
        className="container"
        alignItems={"center"}
        spacing={4}
        style={{ minHeight: "70vh" }}
        marginY={4}
      >
        <Box>
          <Typography style={{ color: "var(--color-primary)" }}>
            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
          </Typography>
          <Typography style={{ color: "var(--color-footer)" }} variant="h2">
            Our Families
          </Typography>
          <Typography>
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
              {/* images here */}

              <Typography variant="h4" style={{ color: "var(--color-footer)" }}>
                5000+
              </Typography>
              <Typography>Happy Patients</Typography>
            </CardContent>
          </Card>

          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              {/* images here */}

              <Typography variant="h4" style={{ color: "var(--color-footer)" }}>
                1000+
              </Typography>
              <Typography>Laboratories</Typography>
            </CardContent>
          </Card>
        </Stack>

        <Stack spacing={4} textAlign={"center"} alignSelf={"flex-end"}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              {/* images here */}

              <Typography variant="h4" style={{ color: "var(--color-footer)" }}>
                200+
              </Typography>
              <Typography>Hospitals</Typography>
            </CardContent>
          </Card>

          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              {/* images here */}

              <Typography variant="h4" style={{ color: "var(--color-footer)" }}>
                700+
              </Typography>
              <Typography>Experts</Typography>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Family;
