import { Box, Typography } from "@mui/material";
import React from "react";

import doc1 from "../assets/doctor1.png";
import doc2 from "../assets/doctor2.png";
import doc3 from "../assets/doctor3.png";
import Carousel from "./Carousel";

export interface Doc {
  image: string;
  name?: string;
  specialisation?: string;
}
const specialistData: Doc[] = [
  {
    image: doc1,
    name: "Dr. Heena Sachdeva",
    specialisation: "Orthopadics",
  },
  {
    image: doc2,
    name: "Dr. Ahmad Khan",
    specialisation: "Neurologist",
  },
  {
    image: doc3,
    name: "Dr. Ankur Sharma",
    specialisation: "Medicine",
  },
  {
    image: doc1,
    name: "Dr. Heena Sachdeva",
    specialisation: "Orthopadics",
  },
  {
    image: doc2,
    name: "Dr. Ahmad Khan",
    specialisation: "Neurologist",
  },
  {
    image: doc3,
    name: "Dr. Ankur Sharma",
    specialisation: "Medicine",
  },
];

const MedicalSpecialist: React.FC = () => {
  return (
    <Box className="" textAlign={"center"}>
      <Typography
        variant="h3"
        style={{ color: "var(--color-footer)" }}
        fontWeight={700}
        marginY={8}
      >
        Our Medical Specialist
      </Typography>

      <Box>
        <Carousel
          renderComponent={(item) => (
            <DocCarouselCard
              image={item.image}
              name={item.name}
              specialisation={item.specialisation}
            />
          )}
          data={specialistData}
        />
      </Box>
    </Box>
  );
};

export default MedicalSpecialist;

const DocCarouselCard: React.FC<Doc> = ({ image, name, specialisation }) => {
  return (
    <Box paddingBottom={6}>
      <Box className="doc-img" marginBottom={2}>
        <img src={image} alt={name} />
      </Box>

      <Typography style={{ color: "var(--color-footer)" }} variant="h6">
        {name}
      </Typography>
      <Typography style={{ color: "var(--color-primary)" }}>
        {specialisation}
      </Typography>
    </Box>
  );
};
