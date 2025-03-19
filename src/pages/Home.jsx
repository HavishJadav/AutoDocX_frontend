
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <h1>Welcome to AutoDocX!</h1>
      <p>Explore our amazing AutodocX :</p>
      <Link to="/about-us">
        <button>About Us</button>
      </Link>
      <Footer />
    </div>
  );
}

export default Home;
