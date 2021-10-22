import { Box } from "@chakra-ui/layout";
import React from "react";

interface Images {
  id: string;
  url: string;
}

export const Card = ({ id, url }: Images) => {
  return (
    <Box width="33vw">
      <img src={url} alt="" />
    </Box>
  );
};
