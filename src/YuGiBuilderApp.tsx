import { ChakraProvider } from "@chakra-ui/react";
import { DeckBuildingScreen } from "./components/screen/DeckBuildingScreen";

// Yugi API https://db.ygoprodeck.com/api-guide/

const YuGiBuilderApp = () => {
  return (
    <ChakraProvider>
      <DeckBuildingScreen />
    </ChakraProvider>
  );
};

export default YuGiBuilderApp;
