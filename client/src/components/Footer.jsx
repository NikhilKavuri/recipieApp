import React from "react";
import "../css/footer.css";
import { BsInstagram, BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="copyright">
        &copy;<em>Nikhil Kavuri</em>
      </div>
      <div className="social-media">
        <a className="links" href="https://www.instagram.com/">
          <BsInstagram className="icons" />
        </a>
        <a className="links" href="https://www.facebook.com/">
          <BsFacebook className="icons" />
        </a>
        <a
          className="links"
          href="https://www.linkedin.com/in/nikhil-kavuri-998481261/"
        >
          <BsLinkedin className="icons" />
        </a>
        <a className="links" href="https://github.com/NikhilKavuri">
          <BsGithub className="icons" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
