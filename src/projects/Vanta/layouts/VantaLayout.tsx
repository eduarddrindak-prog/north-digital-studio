import type { ReactNode } from "react";

import "../styles/global.css";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

interface VantaLayoutProps {
  children: ReactNode;
}

export default function VantaLayout({
  children,
}: VantaLayoutProps) {
  return (
    <div className="vanta-app">
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
