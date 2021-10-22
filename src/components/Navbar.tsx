import { Button } from "@chakra-ui/button";
import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";

const Navbar = () => {
  return (
    <Flex bgColor="gray.500" justifyContent="center">
      <Text
        textAlign="center"
        alignSelf="center"
        width="75vw"
        fontWeight="bold"
      >
        Unnamed Deck
      </Text>
      <Box>
        <Button width="25vw" rounded="false">
          Login
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
