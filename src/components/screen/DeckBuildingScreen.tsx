import { Navbar } from "../details/Navbar";
import { Box, Center, Text } from "@chakra-ui/layout";
import { SearchBar } from "../searchArea/SearchBar";
import { UserDeckGrid } from "../deckArea/UserDeckGrid";
import { CardGrid } from "../fetchArea/CardGrid";

// Color Picker: https://coolors.co/59c3c3-52489c-ebebeb-cad2c5-84a98c

export const DeckBuildingScreen = (): JSX.Element => {
  return (
    <Box bg="#392B58" minH="100vh" h="100%">
      <Box position="sticky" top="0" zIndex="999">
        <Navbar />
      </Box>

      <Box m="2">
        <Box>
          <UserDeckGrid />
        </Box>

        <Box>
          <SearchBar />
        </Box>

        <Box>
          <CardGrid />
        </Box>
      </Box>

      <Box paddingY="20px">
        <Center position="absolute" bottom="0" width="100%" paddingY="12.5px">
          <Text textColor="white" fontWeight="bold">
            Yu-Gi-Builder
          </Text>
        </Center>
      </Box>
    </Box>
  );
};
