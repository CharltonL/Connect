import { BrowserRouter } from "react-router-dom";
import { GlobalStateProvider } from "./components/common/GlobalStateContext";
import "./style.css";

import { FC } from "react";

export interface providersProps {
  children: React.ReactNode;
}

export const Providers: FC<providersProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <GlobalStateProvider>{children}</GlobalStateProvider>
    </BrowserRouter>
  );
};
