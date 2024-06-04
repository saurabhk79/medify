import React from "react";

import AdCarouselBox from "../components/AdCarouselBox";
import Hero from "../components/Hero";
import Specialisation from "../components/Specialisation";
import MedicalSpecialist from "../components/MedicalSpecialist";
import Caring from "../components/Caring";
import BlogNews from "../components/BlogNews";
import Family from "../components/Family";
import Faqs from "../components/Faqs";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <AdCarouselBox />
      <Specialisation />
      <MedicalSpecialist />
      <Caring />
      <BlogNews />
      <Family />
      <Faqs />
    </>
  );
};

export default Home;
