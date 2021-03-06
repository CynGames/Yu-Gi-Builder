import { Box, Button, Center } from "@chakra-ui/react";
import React from "react";
import { useActions } from "../hooks/useActions";
import { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface MultiSelectionItemPros {
  term: string;
}

export const MultiSelectionItem = ({
  term: assignedTerm,
}: MultiSelectionItemPros): JSX.Element => {
  const { term } = useTypedSelector((state) => state.fetch);
  const { filterByKeywords } = useTypedSelector((state) => state.search);
  const { removeFilterKeyword, fetchCards } = useActions();

  useEffect(() => {
    fetchCards(term, filterByKeywords);
  }, []);

  const onClickHandler = async (e: React.SyntheticEvent) => {
    await removeFilterKeyword(assignedTerm);
    const filteredKeywords = filterByKeywords.filter(
      (item) => item != assignedTerm
    );

    await fetchCards(term, filteredKeywords);
  };

  return (
    <Box marginY="2.5px" zIndex="1">
      <Button
        size="sm"
        variant="unstyled"
        borderWidth="1px"
        ml="5px"
        p="10 0"
        onClick={onClickHandler}
      >
        <Center>{assignedTerm}</Center>
      </Button>
    </Box>
  );
};
