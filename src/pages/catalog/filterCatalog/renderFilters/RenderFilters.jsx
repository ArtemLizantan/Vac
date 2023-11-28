import React from "react";
import DropDown from "../../../../UI/dropDown/DropDown";
import { DropDownFilterItems } from "../../../../UI/dropDown/dropDownFilterItems/dropDownFilterItems";
import { Price } from "../filterComponents/price/Price";
import { BodyType } from "./../filterComponents/bodyType/BodyType";
import { Kilometres } from "./../filterComponents/kilometres/Kilometres";
import { Make } from "./../filterComponents/make/Make";
import { Transmission } from "./../filterComponents/transmission/Transmission";
import { Year } from "./../filterComponents/year/Year";
import "./index.scss";
export const RenderFilters = () => {
  const mainFilters = [
    {
      id: "makeModel",
      name: "Make, Model",
      child: {
        key: "makeModel",
        content: <Make />,
      },
    },
    {
      id: "bodyType",
      name: "Body type",
      child: {
        key: "bodyType",
        content: <BodyType />,
      },
    },
    {
      id: "transmission",
      name: "Transmission",
      child: {
        key: "transmission",
        content: <Transmission />,
      },
    },
    {
      id: "price",
      name: "Price",
      child: {
        key: "price",
        content: <Price />,
      },
    },
    {
      id: "year",
      name: "Year",
      child: {
        key: "year",
        content: <Year />,
      },
    },
    {
      id: "kilometres ",
      name: "Kilometres ",
      child: {
        key: "kilometres",
        content: <Kilometres />,
      },
    },
  ];

  return (
    <>
      {mainFilters.map(({ id, name, child: { key, content } }) => {
        console.log(content);
        return (
          <DropDown title={name} id={id} key={id}>
            <DropDownFilterItems content={content} />
          </DropDown>
        );
      })}
    </>
  );
};
