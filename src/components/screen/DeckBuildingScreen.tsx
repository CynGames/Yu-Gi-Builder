import { useState } from "react";
import { CardGrid } from "../CardGrid";
import { YugiCard } from "../../quickType/YugiCard";
import CardSearchNavBar from "../CardSearchNavBar";
import Navbar from "../Navbar";
import UserDeck from "../UserDeck";
import { Box, Center, Text } from "@chakra-ui/layout";

// "banlist_info": {
//   "ban_tcg": "Limited",
//   "ban_ocg": "Semi-Limited"
// },

// Color Picker: https://coolors.co/59c3c3-52489c-ebebeb-cad2c5-84a98c
// En mobile: Al tipear en el search, se sobrepone el navbar.

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

        <Box>
          {filteredArray && (
            <CardGrid filteredArray={filteredArray} cardWidth={20} />
          )}
        </Box>
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
