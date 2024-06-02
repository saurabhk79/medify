import { Box } from '@mui/material'
import React from 'react'
import Carousel from './Carousel'
import AdCarouselCard from './AdCarouselCard'

interface adDataInterface {
    image : string;
}

const adData = {
    
}

const AdCarouselBox:React.FC = () => {
  return (
    <Box>
      <Carousel renderComponent={(data) => <AdCarouselCard image={data.image} />} data={adData} />
    </Box>
  )
}

export default AdCarouselBox
