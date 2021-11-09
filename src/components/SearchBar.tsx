import React, { useEffect, useState } from "react";
import { Text, Flex, HStack, Center } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { SearchIcon } from "@chakra-ui/icons";
import { Button, Spacer } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FaFilter } from "react-icons/fa";
import { RiFilter3Line } from "react-icons/ri";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { YugiohCard } from "../quickType/YugiCard";

// Mejor forma de pasar props mediante redux a hijos. (setFilteredArray)
// Que type ponerle a los setState pasados como props.
// Re-render hell

interface CardFilterProps {
  fetchedCardsSetter: (e: YugiohCard[]) => void;
}

export const SearchBar = ({
  fetchedCardsSetter,
}: CardFilterProps): JSX.Element => {
  // Contiene el criterio de busqueda del input field
  const [inputValue, setInputValue] = useState("Traptrix");

  const { fetchCards } = useActions();
  const { data: cards } = useTypedSelector((state) => state.fetch);

  useEffect(() => {
    initialSetup();
  }, []);

  const initialSetup = async () => {
    if (inputValue.length === 0) return;

    await fetchCards(inputValue);

    fetchedCardsSetter(cards.data);

    setInputValue("");
  };

  useEffect(() => {
    fetchedCardsSetter(cards.data);
  }, [cards]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue.length === 0) return;

    await fetchCards(inputValue);

    fetchedCardsSetter(cards.data);

    setInputValue("");
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
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
