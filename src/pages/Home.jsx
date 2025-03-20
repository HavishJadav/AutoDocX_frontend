import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <h1>Welcome to AutoDocX!</h1>
      <p>
        AutoDocX helps you automatically generate documentation for your code by analyzing your GitHub repositories. With the power of code analysis and LLMs (Large Language Models), we simplify the process of creating detailed, accurate, and structured documentation.
      </p>
      <p>
        Just provide a GitHub repository link, and let AutoDocX create comprehensive documentation for your project, saving you time and ensuring your code is well-documented for others to understand.
      </p>
      <Link to="/about-us">
        <button>Learn More</button>
      </Link>
      <Footer />
    </div>
  );
}

export default Home;
