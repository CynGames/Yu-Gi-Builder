import React from "react";
import { Image } from "@chakra-ui/image";

interface Images {
  id: string;
  url: string;
  name: string;
  width?: number;
}

export const Card = ({ id, name, url, width = 25 }: Images) => {
  const ConvertToPercent = () => width.toString() + "%";

  const widthInPercent = ConvertToPercent();

  const onClickHandler = (e: React.SyntheticEvent) => {
    console.log(`Click Ocurrido en ${name}`);
  };

  return (
    <Image
      width={widthInPercent}
      padding="1.5px"
      src={url}
      onClick={onClickHandler}
    />
  );
};
