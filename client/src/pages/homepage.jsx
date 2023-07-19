import React from "react";
import "../css/homepage.css";
import HomePageNavbar from "../components/HomePageNavbar";
import { HomepageContent } from "../components/HomepageContent";

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
      <div className="footer"></div>
    </>
  );
};

export default HomePage;
