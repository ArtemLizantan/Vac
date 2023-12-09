import React from "react";
import { Helmet } from "react-helmet";
import Heading from "../../components/heading/Heading";
import FifthSection from "./section/fifthSection";
import FirstSection from "./section/fisrtSection";
import FouthSeection from "./section/fouthSection";
import SecondSection from "./section/secondSection";
import ThirdSection from "./section/thirdSection";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About us - VAC</title>
      </Helmet>
      <Heading title={"About CM  "} />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FouthSeection />
      <FifthSection />
    </>
  );
};

export default About;
