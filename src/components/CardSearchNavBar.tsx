import { Box } from "@chakra-ui/layout";
import { CardFilter } from "./CardFilter";

const CardSearchNavBar = ({ setFilteredArray }: any): JSX.Element => {
  return (
    <Box>
      <CardFilter setFilteredArray={(e: any) => setFilteredArray(e)} />
    </Box>
  );
};

export default CardSearchNavBar;
