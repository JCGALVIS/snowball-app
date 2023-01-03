import type { ReactElement } from "react";
import styles from "./card.module.css";

export interface Props {
  children: ReactElement | ReactElement[];
}

export const Card = ({ children }: Props) => {
  return <div className={styles.cardContainer}>{children}</div>;
};
