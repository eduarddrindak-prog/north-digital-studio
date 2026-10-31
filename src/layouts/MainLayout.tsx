import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "pilaruStudio | Professional Websites for Small Businesses",
    description:
      "pilaruStudio creates clear, professional websites that help small businesses build trust and get in touch.",
  },
  "/services": {
    title: "Services | pilaruStudio",
    description:
      "Explore pilaruStudio website design and development services for small businesses and growing teams.",
  },
  "/portfolio": {
    title: "Portfolio | pilaruStudio",
    description:
      "Explore VANTA, Maison Lenoir and Atelier Martin, three concept projects by pilaruStudio.",
  },
  "/faq": {
    title: "FAQ | pilaruStudio",
    description:
      "Answers about pilaruStudio projects, services, pricing, timelines and support.",
  },
  "/contact": {
    title: "Contact | pilaruStudio",
    description:
      "Tell pilaruStudio about your website project and the experience you want to create.",
  },
  "/privacy": {
    title: "Privacy Policy | pilaruStudio",
    description:
      "Learn how pilaruStudio collects, uses and protects information submitted through the website.",
  },
  "/legal": {
    title: "Legal Notice | pilaruStudio",
    description:
      "Legal information about the publisher, hosting and services used by pilaruStudio.",
  },
};

function usePageMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[pathname] ?? pageMetadata["/"];

    document.title = metadata.title;

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );

    description?.setAttribute("content", metadata.description);
  }, [pathname]);
}

export default function MainLayout({
  children,
}:{
  children:React.ReactNode;
}){
  usePageMetadata();

  return (
    <div className="pilaru-site">
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );

}
