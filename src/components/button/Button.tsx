import styles from "./button.module.css";
import { useIntl } from "react-intl";

interface Props {
  position?: "br";
  type?: "submit" | "reset";
  value: string;
}

export const Button = ({ position, type = "submit", value }: Props) => {
  const { formatMessage } = useIntl();
  return (
    <div
      className={`${styles.buttonContainer} ${
        position === "br" && styles.right
      }`}
    >
      <button className={styles.button} type={type}>
        {formatMessage({ id: value })}
      </button>
    </div>
  );
};
