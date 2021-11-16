import { Box } from "@chakra-ui/layout";
import { MenuItem } from "@chakra-ui/menu";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface TypeItemProps {
  keyword: string;
  onClick: () => void;
}

export const TypeItem = ({ keyword, onClick }: TypeItemProps): JSX.Element => {
  const { filterByKeywords } = useTypedSelector((state) => state.search);

  return (
    <Box onClick={onClick}>
      {filterByKeywords.includes(keyword) || <MenuItem> {keyword} </MenuItem>}
    </Box>
  );
};
