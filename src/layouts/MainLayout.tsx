import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "NORTH Studio | Professional Websites for Small Businesses",
    description:
      "North Digital Studio creates clear, professional websites that help small businesses build trust and get in touch.",
  },
  "/services": {
    title: "Services | NORTH Studio",
    description:
      "Explore North Digital Studio website design and development services for small businesses and growing teams.",
  },
  "/portfolio": {
    title: "Portfolio | NORTH Studio",
    description:
      "Explore VANTA, Maison Lenoir and Atelier Martin, three concept projects by North Digital Studio.",
  },
  "/faq": {
    title: "FAQ | NORTH Studio",
    description:
      "Answers about North Digital Studio projects, services, pricing, timelines and support.",
  },
  "/contact": {
    title: "Contact | NORTH Studio",
    description:
      "Tell North Digital Studio about your website project and the experience you want to create.",
  },
  "/privacy": {
    title: "Privacy Policy | NORTH Studio",
    description:
      "Learn how North Digital Studio collects, uses and protects information submitted through the website.",
  },
  "/legal": {
    title: "Legal Notice | NORTH Studio",
    description:
      "Legal information about the publisher, hosting and services used by North Digital Studio.",
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

    <>

      <Header />

      <main className="pt-20">
        {children}
      </main>

      <Footer />

    </>

  );

}
