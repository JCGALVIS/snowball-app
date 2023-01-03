import type { ReactElement } from "react";
import styles from "./card.module.css";

export interface Props {
  children: ReactElement | ReactElement[];
}

export const CardBody = ({ children }: Props) => {
  return <div className={styles.cardBody}>{children}</div>;
};
