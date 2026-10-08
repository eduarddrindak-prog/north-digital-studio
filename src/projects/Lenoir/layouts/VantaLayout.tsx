import type { ReactNode } from "react";

import "../styles/global.css";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

interface LenoirLayoutProps {
  children: ReactNode;
}

export default function LenoirLayout({
  children,
}: LenoirLayoutProps) {
  return (
    <div className="app-shell">
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
