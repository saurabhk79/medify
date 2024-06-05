/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import Swiper from "swiper";
import { SwiperSlide, useSwiper, Swiper as SwiperComponent } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// import styles from "./carousel.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Controls: React.FC<{ data: unknown[] }> = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0, undefined);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return null;
};

interface CarouselProps {
  data: unknown[];
  renderComponent: (item: unknown) => React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ data, renderComponent }) => {
  return (
    <div>
      <SwiperComponent
        initialSlide={0}
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        spaceBetween={40}
        allowTouchMove
        pagination={{ clickable: true }}
        loop={true}
      >
        <Controls data={data} />
        {data.map((item, index) => (
          <SwiperSlide key={index}>{renderComponent(item)}</SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  );
};

export default Carousel;
