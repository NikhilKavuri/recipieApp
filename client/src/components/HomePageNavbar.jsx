import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "../css/homepageNavbar.css";
import { NavLink } from "react-router-dom";
import logo from "../svgs/logo.jpg";
import { BiSolidDownArrow } from "react-icons/bi";

const HomePageNavbar = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Navbar
      data-bs-theme="dark"
      style={{
        borderRadius: "5px 5px 5px 5px",
        backgroundColor: "#5a2675",
        position: "fixed",
        top: "0",
        marginLeft:"5vw",
        zIndex:"20",
        width: "90%",
      }}
    >
      <Container style={{ display: "flex", justifyContent: "space-evenly", flexWrap:"wrap" }}>
        <Nav>
          <img className="app-logo" src={logo} alt="App Logo" />
        </Nav>
        <Navbar.Brand href="#home">Recipie World</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/" exact className="home-link">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact" exact className="contact-link">
            Contact
          </Nav.Link>
        </Nav>
        {size > 530 ? (
          <DropdownButton
            id="dropdown-basic-button"
            variant="light"
            title="Login or SignUp"
          >
            <Dropdown.Item href="/login">Login</Dropdown.Item>
            <Dropdown.Item href="/signup">SignUp</Dropdown.Item>
          </DropdownButton>
        ) : (
          <Dropdown>
            <Dropdown.Toggle
              as={BiSolidDownArrow}
              id="dropdown-custom-components"
              className="dropdown-icon"
              style={{ minWidth: "0px", color:"white", transform: "rotateX(30deg)" }}
            ></Dropdown.Toggle>
            <Dropdown.Menu className="menu" variant="dark" align={"end"}>
              <Dropdown.Item  className="login" href="/login">Login</Dropdown.Item>
              <Dropdown.Item href="/signup">SignUp</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </Container>
    </Navbar>
  );
};

export default HomePageNavbar;
