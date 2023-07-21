import React from "react";
import HomePageNavbar from "../components/HomePageNavbar";
import Contact from "../components/Contact";
import "../css/contact.css";

export const ContactPage = () => {
  return (
    <>
      <nav>
        <HomePageNavbar />
      </nav>
      <div className="contact-body">
        <Contact />
      </div>
    </>
  );
};
