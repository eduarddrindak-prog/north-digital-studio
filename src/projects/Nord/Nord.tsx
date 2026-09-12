import type { ReactNode } from "react";

import "./styles/global.css";

import Header from "./components/Header/Header";

type NordProps = {
  children: ReactNode;
};

function Nord({ children }: NordProps) {
  return (
    <div className="nord">
      <Header />
      {children}
    </div>
  );
}

export default Nord;