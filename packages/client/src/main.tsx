import ReactDOM from "react-dom/client";
import { Router } from "./components/common/Router";

import "./style.css";
import { Providers } from "./providers";

const actualWarn = console.warn;

console.warn = function filterWarnings([message, ...data]: unknown[]) {
  const suppressedWarnings = [
    "MUI: The value provided to Autocomplete is invalid.",
  ];
  if (
    typeof message === "string" &&
    suppressedWarnings.some((e) => message.includes(e))
  ) {
    return;
  }
  actualWarn.apply(console, data);
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Providers>
    <Router />
  </Providers>
);
