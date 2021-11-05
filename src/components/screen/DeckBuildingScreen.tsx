import { useState } from "react";
import { CardGrid } from "../CardGrid";
import { YugiohCards } from "../../quickType/YugiCard";
import CardSearchNavBar from "../CardSearchNavBar";
import Navbar from "../Navbar";
import UserDeck from "../UserDeck";
import { Box, Center, Text } from "@chakra-ui/layout";

// Color Picker: https://coolors.co/59c3c3-52489c-ebebeb-cad2c5-84a98c
// "banlist_info": {
//   "ban_tcg": "Limited",
//   "ban_ocg": "Semi-Limited"
// },

// Acordarse de agregar indicadores de limited, semi o forbidden
// En mobile: Al tipear en el search, se sobrepone el navbar.

// REFACTOR STATE CONTROLLER:
// Necesito controlar ahora mismo:
// - Clicked Card
// - Selected Main, Extra y Side Decks
// - Saved/Selected Player Deck.
//
// A futuro: Auth, Prices?

// To-do para crear decks:
// Sacar la informacion de la carta con un click.
// Copiarla a un nuevo yugi[]
// Ponerla dinamicamente en la main o extra zone de acuerdo a la carta. (por ej: "type: Synchro Monster")

// Agregar funcionalidad para el side deck

/// Consulta JSX.Element

export const DeckBuildingScreen = (): JSX.Element => {
  // Este array contiene los resultados del fetch.
  const [filteredArray, setFilteredArray] = useState<YugiohCards[]>();

  return (
    <Box bg="#392B58">
      <Box position="sticky" top="0">
        <Navbar />
      </Box>

      <Box m="2">
        <UserDeck />
        <CardSearchNavBar setFilteredArray={(e: any) => setFilteredArray(e)} />

        <Box>
          {filteredArray && (
            <CardGrid filteredArray={filteredArray} cardWidth={20} />
          )}
        </Box>
      </Box>

      <Box position="relative" width="100%" paddingY="20px">
        <Center>
          <Text textColor="white" fontWeight="bold">
            Yu-Gi-Builder
          </Text>
        </Center>
      </Box>
    </Box>
  );
};
