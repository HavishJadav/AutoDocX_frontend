
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs"; 
import Features from "./components/Features"; 
import Layout from "./components/Layout"; 
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
         
          <Route path="/" element={<AboutUs />} />
          <Route path="/searchbar" element={<SearchBar />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
