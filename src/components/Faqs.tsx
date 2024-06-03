import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

import faqImage from "../assets/faq-image.png";
import smiley from "../assets/smily.svg";

const Faqs: React.FC = () => {
  return (
    <Box className="container">
      <Typography
        style={{ color: "var(--color-primary)" }}
        textAlign={"center"}
        marginTop={4}
      >
        Get your answers
      </Typography>
      <Typography
        variant="h4"
        style={{ color: "var(--color-footer)" }}
        textAlign={"center"}
        fontWeight={700}
      >
        Frequently Asked Questions
      </Typography>

      <Stack direction={"row"} gap={4}>
        <Box className="faq-image">
          <img src={faqImage} alt="faq image" width={500} />

          <Card className="faq-card" sx={{ width: "250px" }}>
            <CardContent>
              <Stack direction={"row"} spacing={2} alignItems={"center"}>
                <img src={smiley} alt="call" width={50} />
                <Typography>50K+</Typography>
              </Stack>
              <Typography>Happy Patients</Typography>
            </CardContent>
          </Card>
        </Box>

        <Stack justifyContent={"center"}>
          <Accordion
            style={{
              border: "none",
              boxShadow: "none",
              outline: "none",
              marginBottom: "16px",
            }}
          >
            <AccordionSummary
              expandIcon={"+"}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>Why choose our medical for your family?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              border: "none",
              boxShadow: "none",
              outline: "none",
              marginBottom: "16px",
            }}
          >
            <AccordionSummary
              expandIcon={"+"}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Why we are different from others?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            style={{
              border: "none",
              boxShadow: "none",
              outline: "none",
              marginBottom: "16px",
            }}
          >
            <AccordionSummary
              expandIcon={"+"}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>Trusted & experience senior care & love</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              border: "none",
              boxShadow: "none",
              outline: "none",
              marginBottom: "16px",
            }}
          >
            <AccordionSummary
              expandIcon={"+"}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>
                How to get appointment for emergency cases?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Faqs;
