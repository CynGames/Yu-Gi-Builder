import { useState } from "react";
import { CardGrid } from "../CardGrid";
import { YugiCard } from "../../quickType/YugiCard";
import CardSearchNavBar from "../CardSearchNavBar";
import Navbar from "../Navbar";
import UserDeck from "../UserDeck";
import { Box, Center, Text } from "@chakra-ui/layout";

export const DeckBuildingScreen = () => {
  // Este array contiene los resultados del fetch.
  const [filteredArray, setFilteredArray] = useState<YugiCard[]>();

  return (
    <Box bg="#392B58">
      <Box position="sticky" top="0">
        <Navbar />
      </Box>

      <Box m="2">
        <UserDeck />
        <CardSearchNavBar setFilteredArray={(e: any) => setFilteredArray(e)} />

        <Box>{filteredArray && <CardGrid filteredArray={filteredArray} />}</Box>
      </Box>

      <Box position="relative" width="100%" paddingY="20px">
        <Center>
          <Text textColor="white" fontWeight="bold">
            Yu-Gi-Builder
          </Text>
        </Center>
      </Box>
    </Box>
  );
};
