import { IntlProvider } from "react-intl";
import type { ReactNode } from "react";

import { LOCALES } from "./locales";
import messages from "./messages";

interface Props {
  children: ReactNode;
  locale: string;
}

const I18nProvider = ({ children, locale = LOCALES.en }: Props) => {
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
};

export default I18nProvider;
