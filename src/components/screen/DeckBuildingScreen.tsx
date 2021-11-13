import { useEffect, useState } from "react";
import { CardGrid } from "../CardGrid";
import { YugiohCard, UserDeck } from "../../quickType/YugiCard";
import Navbar from "../Navbar";
import { Box, Center, Text } from "@chakra-ui/layout";
import { SearchBar } from "../SearchBar";
import { UserDeckGrid } from "../UserDeckGrid";
import { useTypedSelector } from "../hooks/useTypedSelector";

// Color Picker: https://coolors.co/59c3c3-52489c-ebebeb-cad2c5-84a98c
// "banlist_info": {
//   "ban_tcg": "Limited",
//   "ban_ocg": "Semi-Limited"
//   "ban_ocg": "Banned"
// },

// Known Issues:
// En mobile: Al tipear en el search, se sobrepone el navbar.
// Los botones se sobreponen al navbar
// Podes main o sidedeckear hasta un total de 6 copias de la misma carta al sumarlas.
// No se puede clickear los bordes de la zona de filter type.
// Al quitar asd MenuSeleccionItem , se abre nuevamente debido al toggle state.

// Consultar about JSX.Element
// Consultar about la real difference entre funcional programing y oop
// Preguntar si es mejor crear propiedades personalizadas o es mejor siempre dejar payload.
// Preguntar rendering order

// Si se alcanza:
// Pulir codebase
// Limpiar los reducers con "state"
// Arreglar menu item condicionales
// Atender todos los known issues

// Proximo Stage:
// Pricing box middle debajo de side.
// Crear un par de botones para clear o save
// Permitir deck naming
// Saved/Selected Player Deck
// Implementar inspect
// Agregar indicadores de limited, semi o forbidden, cantidad agregada
// Mostrar pricing de todas las cartas elegidas.
// Capacidad para ordenarlas

export const DeckBuildingScreen = (): JSX.Element => {
  return (
    <Box bg="#392B58" minH="100vh" h="100%">
      <Box position="sticky" top="0">
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
