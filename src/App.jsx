import { Route, Routes, useLocation } from "react-router-dom";

import { useLayoutEffect } from "react";

import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import Listings from "./pages/Listings";
import PropertyDetail from "./components/common/PropertyDetail";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

export default function App() {
  return (
    <Wrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/listings/:name" element={<PropertyDetail />} />
      </Routes>
    </Wrapper>
  );
}
