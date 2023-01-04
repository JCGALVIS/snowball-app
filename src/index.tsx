import ReactDOM from "react-dom/client";
import App from "./App";
import { I18nProvider } from "./i18n";

import './index.css'

const language = navigator.language.split(/[-_]/)[0];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <I18nProvider locale={language}>
    <App />
  </I18nProvider>
);
