import axios from "axios";
import React, { useEffect, useState } from "react";
import { YugiCard } from "../quickType/YugiCard";

export const CardFilter = ({ setFilteredArray }: any) => {
  // Contiene el criterio de busqueda del input field
  const [inputValue, setInputValue] = useState("Traptrix");

  useEffect(() => {
    handleFormSubmit();
  }, []);

  const handleFormSubmit = async (e?: React.SyntheticEvent) => {
    e?.preventDefault();
    const { data } = await getCard(inputValue);

    setFilteredArray(data);
    setInputValue("");
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const getCard = async (inputValue: string) => {
    const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${inputValue}`;
    const { data } = await axios.get<YugiCard>(url);

    return data;
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Search cards..."
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};
