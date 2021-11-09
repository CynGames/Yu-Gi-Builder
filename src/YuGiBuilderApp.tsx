import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./components/state";
import { DeckBuildingScreen } from "./components/screen/DeckBuildingScreen";

// Yugi API https://db.ygoprodeck.com/api-guide/
// SToken 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
// SGist 1ecf8c0dfe46da341ffe327bcf577eba

/*
 Main Deck: 40 a 60 
 Side & Extra: 0 a 15
*/

const YuGiBuilderApp = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <DeckBuildingScreen />
      </ChakraProvider>
    </Provider>
  );
};

export default YuGiBuilderApp;
