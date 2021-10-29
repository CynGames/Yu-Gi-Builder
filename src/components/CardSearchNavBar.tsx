import { Box } from "@chakra-ui/layout";
import { CardFilter } from "./CardFilter";

const CardSearchNavBar = ({ setFilteredArray }: any) => {
  return (
    <Box>
      <CardFilter setFilteredArray={(e: any) => setFilteredArray(e)} />
    </Box>
  );
};

export default CardSearchNavBar;
