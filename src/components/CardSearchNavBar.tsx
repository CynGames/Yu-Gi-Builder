import React from "react";
import { CardFilter } from "./CardFilter";

const CardSearchNavBar = ({ setFilteredArray }: any) => {
  return (
    <div>
      <CardFilter setFilteredArray={(e: any) => setFilteredArray(e)} />
    </div>
  );
};

export default CardSearchNavBar;
