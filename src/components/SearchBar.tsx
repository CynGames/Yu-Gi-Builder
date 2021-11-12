import React, { useEffect, useState } from "react";
import { Text, Flex, HStack, Center, Box } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  MenuDivider,
  MenuGroup,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FaFilter, FaDollarSign } from "react-icons/fa";
import { RiArrowDownSLine, RiFilter3Line } from "react-icons/ri";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuOptionGroup,
} from "@chakra-ui/react";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { MultiSelectionItem } from "./MultiSelectionItem";
import { Keyword } from "./state/reducers/advancedFilterReducer";
import { setFetchTerm } from "./state/action-creators";

// Mejor forma de pasar props mediante redux a hijos. (setFilteredArray)
// Que type ponerle a los setState pasados como props.
// Re-render hell

export const SearchBar = (): JSX.Element => {
  // Contiene el criterio de busqueda del input field
  const [inputValue, setInputValue] = useState("");
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();

  const {
    fetchCards,
    setSideDeckMode,
    setAdvancedFilteringMode,
    setPricingMode,
    addFilterKeyword,
    setFetchTerm,
  } = useActions();
  const { isSideDeckingState, advancedFilteringState, pricingState } =
    useTypedSelector((state) => state.setting);

  const { filterByKeywords } = useTypedSelector((state) => state.filter);
  const { term } = useTypedSelector((state) => state.fetch);

  useEffect(() => {
    async function fetcher() {
      if (term.length == 0) return;

      await fetchCards(term, filterByKeywords);
    }

    fetcher();
  }, [term]);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFetchTerm(e.currentTarget.value);
  };

  return (
    <Flex flexDir="column">
      <Text textColor="white" p="5px">
        Search Criteria
      </Text>
      <Flex width="100%" mb="10px">
        <HStack borderWidth="1px" borderColor="purple.200" p="10px" flex="5">
          <SearchIcon color="white" />
          <Spacer />
          <Input
            type="text"
            color="white"
            placeholder="Search cards..."
            value={term}
            onChange={handleInputChange}
            variant="unstyled"
          />
        </HStack>
        <Center
          borderWidth="1px"
          borderColor="purple.200"
          paddingX="15px"
          ml="10px"
          backgroundColor={advancedFilteringState ? "#52489C" : "#0000fff"}
        >
          <Icon
            as={FaFilter}
            color="white"
            onClick={() => setAdvancedFilteringMode(!advancedFilteringState)}
          />
        </Center>
      </Flex>
      <Flex mb="10px">
        <Button
          backgroundColor={!isSideDeckingState ? "#52489C" : "#0000fff"}
          flex="1"
          textAlign="center"
          borderWidth="1px"
          borderColor="purple.200"
          variant="unstyled"
          textColor="white"
          mr="5px"
          colorScheme="purple"
          _focus={{ backgroundColor: "#52489C" }}
          onPointerDown={() => setSideDeckMode(false)}
        >
          Main
        </Button>
        <Button
          backgroundColor={isSideDeckingState ? "#52489C" : "#0000fff"}
          flex="1"
          borderWidth="1px"
          borderColor="purple.200"
          variant="unstyled"
          textColor="white"
          ml="5px"
          _focus={{ backgroundColor: "#52489C" }}
          onPointerDown={() => setSideDeckMode(true)}
        >
          Side
        </Button>

        <Center
          backgroundColor={pricingState ? "#52489C" : "#0000fff"}
          borderWidth="1px"
          borderColor="purple.200"
          paddingX="15px"
          ml="10px"
        >
          <Icon
            as={FaDollarSign}
            color="white"
            onClick={() => setPricingMode(!pricingState)}
          />
        </Center>
      </Flex>

      {advancedFilteringState && (
        <Menu autoSelect={false} closeOnBlur={true} isOpen={isOpen}>
          <HStack
            p="10px"
            borderWidth="1px"
            borderColor="purple.200"
            mb="10px"
            onClick={onToggle}
          >
            <Icon as={RiFilter3Line} color="white" />
            <Flex textColor="white" wrap="wrap" width="100%">
              {filterByKeywords.map((item) => (
                <MultiSelectionItem term={item} />
              ))}
              <MenuButton textColor="white" textAlign="left">
                {filterByKeywords.length == 0 && "Select a Card Type"}
                <HStack w="60vw" />
              </MenuButton>
            </Flex>

            <MenuList
              backgroundColor="#52489C"
              borderWidth="1px"
              borderColor="purple.200"
              textColor="white"
              height="40vh"
              overflowY="auto"
            >
              {(filterByKeywords.includes(Keyword.Spell) &&
                filterByKeywords.includes(Keyword.Trap)) || (
                <MenuGroup fontSize="1rem" title="Card Type">
                  <Text fontSize="0.9rem" pl="10px">
                    {/* <MenuItem onCLick={() => addFilterKeyword(Keyword.Monster)}>Monster</MenuItem> */}

                    {filterByKeywords.includes(Keyword.Spell) || (
                      <MenuItem onClick={() => addFilterKeyword(Keyword.Spell)}>
                        Spell
                      </MenuItem>
                    )}
                    {filterByKeywords.includes(Keyword.Trap) || (
                      <MenuItem onClick={() => addFilterKeyword(Keyword.Trap)}>
                        Trap
                      </MenuItem>
                    )}
                  </Text>
                </MenuGroup>
              )}
              <MenuDivider mb="15px" />
              <MenuOptionGroup fontSize="1rem" title="Monster Type">
                <Text fontSize="0.9rem" pl="10px">
                  {filterByKeywords.includes(Keyword.Normal) || (
                    <MenuItem onClick={() => addFilterKeyword(Keyword.Normal)}>
                      Normal
                    </MenuItem>
                  )}

                  {filterByKeywords.includes(Keyword.Effect) || (
                    <MenuItem onClick={() => addFilterKeyword(Keyword.Effect)}>
                      Effect
                    </MenuItem>
                  )}

                  {filterByKeywords.includes(Keyword.Union) || (
                    <MenuItem onClick={() => addFilterKeyword(Keyword.Union)}>
                      Union
                    </MenuItem>
                  )}
                  {filterByKeywords.includes(Keyword.Spirit) || (
                    <MenuItem onClick={() => addFilterKeyword(Keyword.Spirit)}>
                      Spirit
                    </MenuItem>
                  )}
                  {filterByKeywords.includes(Keyword.Flip) || (
                    <MenuItem onClick={() => addFilterKeyword(Keyword.Flip)}>
                      Flip
                    </MenuItem>
                  )}
                  {filterByKeywords.includes(Keyword.Gemini) || (
                    <MenuItem onClick={() => addFilterKeyword(Keyword.Gemini)}>
                      Gemini
                    </MenuItem>
                  )}
                  {filterByKeywords.includes(Keyword.Toon) || (
                    <MenuItem onClick={() => addFilterKeyword(Keyword.Toon)}>
                      Toon
                    </MenuItem>
                  )}
                  {filterByKeywords.includes(Keyword.Ritual) || (
                    <MenuItem onClick={() => addFilterKeyword(Keyword.Ritual)}>
                      Ritual
                    </MenuItem>
                  )}
                  {filterByKeywords.includes(Keyword.Fusion) || (
                    <MenuItem onClick={() => addFilterKeyword(Keyword.Fusion)}>
                      Fusion
                    </MenuItem>
                  )}
                  {filterByKeywords.includes(Keyword.Synchro) || (
                    <MenuItem onClick={() => addFilterKeyword(Keyword.Synchro)}>
                      Synchro
                    </MenuItem>
                  )}
                  {filterByKeywords.includes(Keyword.Xyz) || (
                    <MenuItem onClick={() => addFilterKeyword(Keyword.Xyz)}>
                      Xyz
                    </MenuItem>
                  )}
                  {filterByKeywords.includes(Keyword.Pendulum) || (
                    <MenuItem
                      onClick={() => addFilterKeyword(Keyword.Pendulum)}
                    >
                      Pendulum
                    </MenuItem>
                  )}
                  {filterByKeywords.includes(Keyword.Link) || (
                    <MenuItem onClick={() => addFilterKeyword(Keyword.Link)}>
                      Link
                    </MenuItem>
                  )}
                  {filterByKeywords.includes(Keyword.Tuner) || (
                    <MenuItem onClick={() => addFilterKeyword(Keyword.Tuner)}>
                      Tuner
                    </MenuItem>
                  )}
                </Text>
              </MenuOptionGroup>
            </MenuList>
            <Icon as={RiArrowDownSLine} color="white" />
          </HStack>
        </Menu>
      )}
    </Flex>
  );
};
