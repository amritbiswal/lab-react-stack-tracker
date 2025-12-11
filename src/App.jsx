import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import HomePage from "./pages/HomePage.jsx";
import CompanyPage from "./pages/CompanyPage.jsx";
import TechnologyPage from "./pages/TechnologyPage.jsx";
import Navbar from "./components/Navbar.jsx";

import companyData from "./data/companies.json";
import technologyData from "./data/technologies.json";

function App() {
  const [companies, setCompanies] = useState(companyData);
  const [technologies, setTechnologies] = useState(technologyData);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage companies={companies} />} />
        <Route
          path="/company/:companySlug"
          element={<CompanyPage companies={companies} />}
        />
        <Route
          path="/tech/:techSlug"
          element={<TechnologyPage technologies={technologies} />}
        />
      </Routes>
    </>
  );
}

export default App;
