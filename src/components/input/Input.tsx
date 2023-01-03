import { useIntl } from "react-intl";

import styles from "./input.module.css";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  type?: "text" | "password" | "number" | "email";
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export const Input = ({
  label,
  name,
  placeholder,
  type,
  value,
  onChange,
}: Props) => {
  const { formatMessage } = useIntl();

  return (
    <div className={styles.input}>
      <label className={styles.label}>{formatMessage({ id: label })}</label>
      <input
        className={styles.text}
        name={name}
        placeholder={formatMessage({ id: placeholder })}
        type={type}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};
