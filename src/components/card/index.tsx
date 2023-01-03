import { Card as CardHOC } from "./Card";
import { CardBody } from "./Card-body";
import { CardHeader } from "./Card-header";
import { CardHOCProps } from "../interfaces/card";

const Card: CardHOCProps = Object.assign(CardHOC, {
  Header: CardHeader,
  Body: CardBody,
});

export default Card;
