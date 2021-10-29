import { ChakraProvider } from "@chakra-ui/react";
import { DeckBuildingScreen } from "./components/screen/DeckBuildingScreen";

// Yugi API https://db.ygoprodeck.com/api-guide/

/*
 Main Deck: 40 a 60 
 Side & Extra: 0 a 15
*/

const YuGiBuilderApp = () => {
  return (
    <ChakraProvider>
      <DeckBuildingScreen />
    </ChakraProvider>
  );
};

export default YuGiBuilderApp;
