import gmailLogo from "../../assets/icons/gmail-logo.svg";
import styles from "./gmail-button.module.css";
import { useIntl } from "react-intl";

export const GmailButton = () => {
  const { formatMessage } = useIntl();
  return (
    <div className={styles.gmailButtonContainer}>
      <div className={styles.gmailLogoContent}>
        <img src={gmailLogo} alt="gmail"></img>
      </div>
      <span className={styles.label}>
        {formatMessage({ id: "app.button-login-gmail" })}
      </span>
    </div>
  );
};
