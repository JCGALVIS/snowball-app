import { useIntl } from "react-intl";

import styles from "./title.module.css";

interface Props {
  value: string;
}

export const Title = ({ value }: Props) => {
  const { formatMessage } = useIntl();
  return <h4 className={styles.title}>{formatMessage({ id: value })}</h4>;
};
