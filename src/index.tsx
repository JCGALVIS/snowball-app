import React from "react";
import ReactDOM from "react-dom/client";
import { IntlProvider } from "react-intl";

import App from "./App";
import { I18nProvider } from "./i18n";

const language = navigator.language.split(/[-_]/)[0];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <I18nProvider locale={language}>
      <App />
    </I18nProvider>
  </React.StrictMode>
);
