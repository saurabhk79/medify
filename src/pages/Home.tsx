import React from "react";
import Hero from "../components/Hero";
import Specialisation from "../components/Specialisation";
import Caring from "../components/Caring";
import BlogNews from "../components/BlogNews";
import Family from "../components/Family";
import Faqs from "../components/Faqs";

const Home: React.FC = () => {
  return (
    <div>

      <Hero />

      <Specialisation />
      <Caring />
      <BlogNews />
      <Family />
      <Faqs />
    </div>
  );
};

export default Home;
