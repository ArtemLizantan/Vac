import React from "react";
import DropDown from "../../../../UI/dropDown/DropDown";
import { DropDownFilterItems } from "../../../../UI/dropDown/dropDownFilterItems/dropDownFilterItems";
import { Price } from "../filterComponents/price/Price";
import { BodyType } from "./../filterComponents/bodyType/BodyType";
import { Kilometres } from "./../filterComponents/kilometres/Kilometres";
import { Make } from "./../filterComponents/make/Make";

import { Transmission } from "../filterComponents/transmission/Transmission";
import { Year } from "./../filterComponents/year/Year";
import "./index.scss";
export const RenderFilters = ({ cards, setCards }) => {
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
        content: <BodyType cards={cards} setCards={setCards} />,
      },
    },
    {
      id: "transmission",
      name: "Transmission",
      child: {
        key: "transmission",
        content: <Transmission cards={cards} setCards={setCards} />,
      },
    },
    {
      id: "price",
      name: "Price",
      child: {
        key: "price",
        content: <Price cards={cards} setCards={setCards} />,
      },
    },
    {
      id: "year",
      name: "Year",
      child: {
        key: "year",
        content: <Year cards={cards} setCards={setCards} />,
      },
    },
    {
      id: "kilometres ",
      name: "Kilometres ",
      child: {
        key: "kilometres",
        content: <Kilometres cards={cards} setCards={setCards}/>,
      },
    },
  ];

  return (
    <>
      {mainFilters.map(({ id, name, child: { key, content } }) => {
        return (
          <DropDown title={name} id={id} key={id}>
            <DropDownFilterItems content={content} />
          </DropDown>
        );
      })}
    </>
  );
};
