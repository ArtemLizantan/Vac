import React from "react";
import { Helmet } from "react-helmet";
import { SingleProduct } from "./SingleProduct";
import Calculator from "../../components/calculator/Calculator.jsx";

const SinglePageProduct = () => {
  return (
    <>
      <Helmet>
        <title>Main page - VAC</title>
      </Helmet>
      <SingleProduct />
      <Calculator title={"Calculate the installment plan for this car."} />
    </>
  );
};

export default SinglePageProduct;
