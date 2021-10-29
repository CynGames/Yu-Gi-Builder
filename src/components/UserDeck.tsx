import React from "react";
import { Box, Flex, Center } from "@chakra-ui/layout";
import { CardGrid } from "./CardGrid";
import filteredArray from "../quickType/RitualBeast.json";
import { Spacer } from "@chakra-ui/react";

const UserDeck = () => {
  const { data } = filteredArray;

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
        <CardGrid filteredArray={data} />
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
        <CardGrid filteredArray={data} />
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
        <CardGrid filteredArray={data} />
      </Box>
    </Flex>
  );
};

export default UserDeck;
