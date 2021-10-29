import React from "react";
import { Box, Flex, Center } from "@chakra-ui/layout";
import { CardGrid } from "./CardGrid";
import TestMainDeck from "../quickType/RitualBeast.json";
import TestExtraDeck from "../quickType/RitualBeastExtra.json";
import TestSideDeck from "../quickType/RitualBeastSide.json";
import { Spacer } from "@chakra-ui/react";

const UserDeck = () => {
  const { data: mainData } = TestMainDeck;
  const { data: extraData } = TestExtraDeck;
  const { data: sideData } = TestSideDeck;

  return (
    <Flex width="100%" flexDir="column">
      <Center marginY="5px" textColor="white" fontWeight="bold">
        Main Deck
      </Center>
      <Box
        bg="black"
        fontWeight="bold"
        textColor="white"
        alignSelf="center"
        flex="1"
        p="2.5px"
      >
        <CardGrid filteredArray={mainData} />
      </Box>
      <Spacer m="5px" />
      <Box
        bg="black"
        fontWeight="bold"
        textColor="white"
        alignSelf="center"
        flex="1"
        p="2.5px"
      >
        <CardGrid filteredArray={extraData} />
      </Box>

      <Center marginY="5px" textColor="white" fontWeight="bold">
        Side Deck
      </Center>
      <Box
        bg="black"
        fontWeight="bold"
        textColor="white"
        alignSelf="center"
        flex="1"
        p="2.5px"
      >
        <CardGrid filteredArray={sideData} />
      </Box>
    </Flex>
  );
};

export default UserDeck;
