import React from 'react';
import { Helmet } from 'react-helmet';
import Heading from '../../components/heading/Heading';
import Calculator from '../../components/calculator/Calculator';

const CalculatorPage = () => {
  return (
    <>
      <Helmet>
        <title>Calculator - VAC1</title>
      </Helmet>
      <Heading title={'Use our free calculator!'} />
      <Calculator mtX={40} mtS={31}title={"Let’s figure out how much you can afford"} />
    </>
  );
};

export default CalculatorPage;
