import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";

import hearthand from "../assets/hearthand.svg";
import hospital from "../assets/red-hospital.png";
import laboratory from "../assets/yellow-lab.svg";
import doc from "../assets/green-doc.png";

const Family: React.FC = () => {
  return (
    <Stack className="family">
      <Stack
        direction={"row"}
        className="container"
        alignItems={"center"}
        spacing={6}
        marginY={4}
        height={540}
      >
        <Box>
          <Typography style={{ color: "var(--color-primary)" }}>
            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
          </Typography>
          <Typography
            style={{ color: "var(--color-footer)" }}
            variant="h4"
            fontWeight={700}
            marginBottom={4}
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
          <Card sx={{ height: 240, width: 180 }}>
            <CardContent>
              <Box
                className="caring-icon"
                style={{ background: "var(--color-bgc)" }}
              >
                <img src={hearthand} alt="heart hand" />
              </Box>

              <Typography
                variant="h4"
                fontWeight={700}
                marginY={2}
                style={{ color: "var(--color-footer)" }}
              >
                5000+
              </Typography>
              <Typography color={"gray"}>Happy Patients</Typography>
            </CardContent>
          </Card>

          <Card sx={{ height: 240, width: 180 }}>
            <CardContent>
              <Box className="caring-icon" bgcolor={"#FFF7E6"}>
                <img src={laboratory} alt="laboratory" />
              </Box>

              <Typography
                variant="h4"
                fontWeight={700}
                marginY={2}
                style={{ color: "var(--color-footer)" }}
              >
                1000+
              </Typography>
              <Typography color={"gray"}>Laboratories</Typography>
            </CardContent>
          </Card>
        </Stack>

        <Stack spacing={4} textAlign={"center"} alignSelf={"flex-end"}>
          <Card sx={{ height: 240, width: 180 }}>
            <CardContent>
              <Box className="caring-icon" bgcolor={"#FFF2F0"}>
                <img src={hospital} alt="hospital" />
              </Box>

              <Typography
                variant="h4"
                fontWeight={700}
                marginY={2}
                style={{ color: "var(--color-footer)" }}
              >
                2000+
              </Typography>
              <Typography color={"gray"}>Hospitals</Typography>
            </CardContent>
          </Card>

          <Card sx={{ height: 240, width: 180 }}>
            <CardContent>
              <Box className="caring-icon" bgcolor={"#EBFAF1"}>
                <img src={doc} alt="doc" />
              </Box>

              <Typography
                variant="h4"
                fontWeight={700}
                marginY={2}
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
