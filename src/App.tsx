import { Routes, Route } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

import Home from "@/pages/Home/Home";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";

import VantaLayout from "@/projects/Vanta/layouts/VantaLayout";
import VantaHome from "@/projects/Vanta/pages/Home/Home";

function App() {
  return (
    <Routes>

      {/* North Studio */}

      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />

      <Route
        path="/services"
        element={
          <MainLayout>
            <Services />
          </MainLayout>
        }
      />

      <Route
        path="/portfolio"
        element={
          <MainLayout>
            <Portfolio />
          </MainLayout>
        }
      />

      <Route
        path="/faq"
        element={
          <MainLayout>
            <FAQ />
          </MainLayout>
        }
      />

      <Route
        path="/contact"
        element={
          <MainLayout>
            <Contact />
          </MainLayout>
        }
      />

      <Route
  path="/vanta"
  element={
    <VantaLayout>
      <VantaHome />
    </VantaLayout>
  }
/>

    </Routes>
  );
}

export default App;