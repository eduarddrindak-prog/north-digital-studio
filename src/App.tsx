import { Routes, Route } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

import Home from "@/pages/Home/Home";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";

import VantaLayout from "@/projects/Vanta/layouts/VantaLayout";
import VantaHome from "@/projects/Vanta/pages/Home/Home";

import LenoirLayout from "@/projects/Lenoir/layouts/LenoirLayout";
import LenoirHome from "@/projects/Lenoir/pages/Home/Home";
import LenoirProducts from "@/projects/Lenoir/pages/Products/Products";
import LenoirBakery from "@/projects/Lenoir/pages/Bakery/Bakery";
import LenoirOrders from "@/projects/Lenoir/pages/Orders/Orders";
import LenoirFindUs from "@/projects/Lenoir/pages/FindUs/FindUs";

function App() {
  return (
    <Routes>
      {/* North Digital Studio */}
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

      {/* VANTA */}
      <Route
        path="/vanta"
        element={
          <VantaLayout>
            <VantaHome />
          </VantaLayout>
        }
      />

      {/* Maison Lenoir */}
      <Route
        path="/lenoir"
        element={
          <LenoirLayout>
            <LenoirHome />
          </LenoirLayout>
        }
      />
      <Route path="/lenoir/products" element={<LenoirLayout><LenoirProducts /></LenoirLayout>} />
      <Route path="/lenoir/bakery" element={<LenoirLayout><LenoirBakery /></LenoirLayout>} />
      <Route path="/lenoir/orders" element={<LenoirLayout><LenoirOrders /></LenoirLayout>} />
      <Route path="/lenoir/find-us" element={<LenoirLayout><LenoirFindUs /></LenoirLayout>} />
    </Routes>
  );
}

export default App;
