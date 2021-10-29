import axios from "axios";
import React, { useEffect, useState } from "react";
import { YugiCard } from "../quickType/YugiCard";
import { Box, Text, Flex, HStack, Center } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { SearchIcon, StarIcon } from "@chakra-ui/icons";
import { Button, Spacer } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FaFilter } from "react-icons/fa";
import { RiFilter3Line } from "react-icons/ri";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react";

export const CardFilter = ({ setFilteredArray }: any) => {
  // Contiene el criterio de busqueda del input field
  const [inputValue, setInputValue] = useState("Sky Striker");

  const initialSetup = async () => {
    if (inputValue.length === 0) return;

    const { data } = await getCard(inputValue);
    setFilteredArray(data);
  };

  const handleFormSubmit = async (e?: React.SyntheticEvent) => {
    e?.preventDefault();

    if (inputValue.length === 0) return;

    const { data } = await getCard(inputValue);

    setFilteredArray(data);
    setInputValue("");
  };

  useEffect(() => {
    initialSetup();
  }, []);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const getCard = async (inputValue: string) => {
    const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${inputValue}`;
    const { data } = await axios.get<YugiCard>(url);

    return data;
  };

  return (
    <Flex flexDir="column">
      <Text textColor="white" p="5px">
        Search Criteria
      </Text>
      <form onSubmit={handleFormSubmit}>
        <Flex width="100%" mb="10px">
          <HStack borderWidth="1px" borderColor="purple.200" p="10px" flex="5">
            <SearchIcon color="white" />
            <Spacer />
            <Input
              type="text"
              color="white"
              placeholder="Search cards..."
              value={inputValue}
              onChange={handleInputChange}
              variant="unstyled"
            />
          </HStack>
          <Center
            borderWidth="1px"
            borderColor="purple.200"
            paddingX="15px"
            ml="10px"
          >
            <Icon as={FaFilter} color="white" />
          </Center>
        </Flex>
      </form>
      <Flex mb="10px">
        <Button
          flex="1"
          textAlign="center"
          borderWidth="1px"
          borderColor="purple.200"
          variant="unstyled"
          textColor="white"
          mr="5px"
          colorScheme="purple"
          _focus={{ backgroundColor: "#52489C" }}
        >
          Main
        </Button>
        <Button
          flex="1"
          borderWidth="1px"
          borderColor="purple.200"
          variant="unstyled"
          textColor="white"
          ml="5px"
          _focus={{ backgroundColor: "#52489C" }}
        >
          Side
        </Button>
      </Flex>

      <Menu>
        <HStack p="10px" borderWidth="1px" borderColor="purple.200" mb="10px">
          <Icon as={RiFilter3Line} color="white" />
          <MenuButton textColor="white" textAlign="left">
            Filter by card type...
          </MenuButton>

          <MenuList>
            <MenuItem>Monster</MenuItem>
            <MenuItem>Spell</MenuItem>
            <MenuItem>Trap</MenuItem>
          </MenuList>
        </HStack>
      </Menu>
    </Flex>
  );
};
