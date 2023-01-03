import { ReactElement } from "react";

import styles from "./card.module.css";

export interface Props {
  children: ReactElement | ReactElement[];
}

export const CardHeader = ({ children }: Props) => {
  return <div className={styles.cardHeader}>{children}</div>;
};
