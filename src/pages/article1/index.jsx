import React from 'react';

import { Helmet } from 'react-helmet';

import FirstSection from './section/firstSection';
import SecondSection from './section/secondSection';
import ThirdSection from './section/thirdSection';

const Article1 = () => {
  return (
    <>
      <Helmet>
        <title>How to save on buying a car? - VAC</title>
      </Helmet>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </>
  );
};

export default Article1;
