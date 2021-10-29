import React from "react";
import { Image } from "@chakra-ui/image";

interface Images {
  id: string;
  url: string;
  width?: number;
}

export const Card = ({ id, url, width = 25 }: Images) => {
  const ConvertToPercent = () => width.toString() + "%";

  const widthInPercent = ConvertToPercent();

  return <Image width={widthInPercent} padding="1.5px" src={url} alt="" />;
};
