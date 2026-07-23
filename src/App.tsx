import { Routes, Route } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

import Home from "@/pages/Home/Home";
import Services from "@/pages/Services";

import Portfolio from "@/pages/Portfolio";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/services"
          element={<Services />}
        />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />   
      </Routes>
    </MainLayout>
  );
}

export default App;