import React from "react";
import Banner from "../../components/banner/Banner";
import StatsSection from "../../components/stateSection/StatsSection";
import TutorCard from "../../components/tutorCard/TutorCard";
import OpenLanguage from "../../components/openLanguage/OpenLanguage";
import Testimonial from "../../components/testimonial/Testimonial";
import Blog from "../../components/blog/Blog";
import Faqs from "../../components/faqs/Faqs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <StatsSection></StatsSection>
      <TutorCard></TutorCard>
      <OpenLanguage></OpenLanguage>
      <Testimonial></Testimonial>
      <Blog></Blog>
      <Faqs></Faqs>
    </div>
  );
};

export default Home;
