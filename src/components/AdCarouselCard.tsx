import { Card, CardMedia } from "@mui/material";
import React from "react";

interface AdCarouselCardProps {
    
  image: string;
}

const AdCarouselCard: React.FC<AdCarouselCardProps> = ({ image }) => {
  return (
    <Card>
      <CardMedia sx={{ height: 240 }} image={image} title="blog" />
    </Card>
  );
};

export default AdCarouselCard;
