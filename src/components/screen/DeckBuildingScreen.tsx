import { useState } from "react";
import { CardGrid } from "../CardGrid";
import { YugiCard } from "../../quickType/YugiCard";
import CardSearchNavBar from "../CardSearchNavBar";
import Navbar from "../Navbar";
import UserDeck from "../UserDeck";
import { Box, Flex } from "@chakra-ui/layout";

export const DeckBuildingScreen = () => {
  // Este array contiene los resultados del fetch.
  const [filteredArray, setFilteredArray] = useState<YugiCard[]>();

  return (
    <Box>
      <Box position="sticky" top="0">
        <Navbar />
        <UserDeck />
      </Box>
      <CardSearchNavBar setFilteredArray={(e: any) => setFilteredArray(e)} />

      <Box>{filteredArray && <CardGrid filteredArray={filteredArray} />}</Box>
    </Box>
  );
};
