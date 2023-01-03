import { Props as CardBodyProps } from "../card/Card-body";
import { Props as CardHeaderProps } from "../card/Card-header";
import { Props as CardProps } from "../card/Card";

export interface CardHOCProps {
  (props: CardProps): JSX.Element;
  Header: (props: CardHeaderProps) => JSX.Element;
  Body: (props: CardBodyProps) => JSX.Element;
}
