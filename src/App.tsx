import { Routes, Route } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

import Home from "@/pages/Home/Home";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";

import Nord from "@/projects/Nord/Nord";
import NordProjects from "@/projects/Nord/pages/Projects/Projects";
import NordHome from "@/projects/Nord/pages/Home/Home";
import NordStudio from "@/projects/Nord/pages/Studio/Studio";
import NordServices from "@/projects/Nord/pages/Services/Services";

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

      {/* NORD */}
      <Route
  path="/portfolio/nord"
  element={
    <Nord>
      <main>
        <section className="section">
          <div className="container">
            <p className="eyebrow">NORD — Interior Studio</p>

            <h1 className="display">
              Spaces shaped around how people live.
            </h1>

            <p className="subheading">
              An independent interior studio based in Copenhagen,
              working across residential, hospitality and small
              commercial spaces.
            </p>
          </div>
        </section>
      </main>
    </Nord>
  }
/>

<Route
  path="/portfolio/nord/projects"
  element={
    <Nord>
      <NordProjects />
    </Nord>
  }
/>

<Route
  path="/portfolio/nord/home"
  element={
    <Nord>
      <NordHome />
    </Nord>
  }
/>

<Route
  path="/portfolio/nord/studio"
  element={
  <Nord>
    <NordStudio />
    </Nord>}
/>

<Route
  path="/portfolio/nord/Services"
  element={
  <Nord>
    <NordServices />
    </Nord>}
/>
    </Routes>
  );
}

export default App;