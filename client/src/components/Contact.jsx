import React from "react";
import contactSvg from "../svgs/contact.svg";
import "../css/contact.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1 style={{marginBottom:"5vh"}}>Contact Me</h1>
        <ContactForm className="contact" />
      </div>
      <div className="contact-svg">
        <img className="svg" src={contactSvg} alt="Contact svg" />
      </div>
    </div>
  );
};

export default Contact;
