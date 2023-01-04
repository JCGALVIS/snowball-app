import { useIntl } from "react-intl";

import styles from "./title.module.css";

interface Props {
  position?: "tl" | "tc";
  value: string;
}

export const Title = ({ position = "tl", value }: Props) => {
  const { formatMessage } = useIntl();
  return (
    <h4
      className={`${styles.title} ${
        position === "tl" ? styles.left : styles.center
      }`}
    >
      {formatMessage({ id: value })}
    </h4>
  );
};
