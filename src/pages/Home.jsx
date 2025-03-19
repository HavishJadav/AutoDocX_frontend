import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import AboutUs from "../components/AboutUs";
import "../styles.css";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        {/* <h2>Welcome to My Website</h2>
        <SearchBar /> */}
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
