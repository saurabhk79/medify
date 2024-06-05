import { Box, Card, CardMedia } from "@mui/material";
import React from "react";
import Carousel from "./Carousel";
import homeads from "../assets/homeads.png";
import homeads2 from "../assets/homeads2.png";

interface AdCarouselCardProps {
  image: string;
}

const adData: AdCarouselCardProps[] = [
  {
    image: homeads,
  },
  {
    image: homeads2,
  },
  {
    image: homeads,
  },
  {
    image: homeads2,
  },

];

const AdCarouselBox: React.FC = () => {
  return (
    <Box className="carousel-box container">
      <Box marginBottom={8}>
        <Carousel
          renderComponent={(item) => <AdCarouselCard image={item.image} />}
          data={adData}
        />
      </Box>
    </Box>
  );
};

const AdCarouselCard: React.FC<AdCarouselCardProps> = ({ image }) => {
  return (
    <Card>
      <CardMedia sx={{ height: 180 }} image={image} title="ad image" />
    </Card>
  );
};

export default AdCarouselBox;
