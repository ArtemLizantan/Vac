import React from "react";
import { Helmet } from "react-helmet";

import Hero from "./section/hero/Hero";
import HowToWork from "./section/howToWork";
import SeventhSection from "./section/seventhSection";

import Calculator from "../../components/calculator/Calculator";
import Adnwantages from "./section/advantages/index";
import ClientSay from "./section/clientSay/index";
import Customers from "./section/customers/index";
import EightSection from "./section/eightSection";
import PerfectCard from "./section/perfectCard/index";

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>Main page - VAC</title>
      </Helmet>
      <Hero />
      <HowToWork />
      <PerfectCard />
      <Adnwantages />
      <Customers />
      <ClientSay />
      {/* <SeventhSection /> */}
      <Calculator mtX={220} mtM={159} mtS={80} title={"Let’s figure out how much you can afford"}/>
      <EightSection />
    </>
  );
};

export default MainPage;
