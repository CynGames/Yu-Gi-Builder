import React from "react";
import { Image } from "@chakra-ui/image";

interface Images {
  id: string;
  url: string;
  width: number;
}

export const Card = ({ id, url, width }: Images) => {
  const ConvertToVW = () => width.toString() + "%";

  const widthInVW = ConvertToVW();

  return <Image width={widthInVW} padding="1px" src={url} alt="" />;
};
