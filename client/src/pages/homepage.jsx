import React from "react";
import "../css/homepage.css";
import HomePageNavbar from "../components/HomePageNavbar";
import { HomepageContent } from "../components/HomepageContent";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <nav>
        <HomePageNavbar />
      </nav>
      <div className="body">
        <section className="body-container">
          <HomepageContent />
        </section>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
