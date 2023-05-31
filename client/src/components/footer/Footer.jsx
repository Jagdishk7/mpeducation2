import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer bg="dark" variant="dark" className="footer-section">
        <div className="footer-logo">
          <Link to={"/"}>
            <img src="assets/logo.png" alt="logo" />
          </Link>

          <p>
            ICOESS is commited to provide adative services & solutions to our
            cusomers. ICOESS helps businesses thrive in a world defined by
            disruption and fueled by transformative technology.
          </p>
        </div>

        
          <div className="footer-nav">
            <Container>
              <Nav className="footer-links">
                <Link to={"/"}>Home</Link>
                <Link to={"/login"}>Login & Register</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/blogs"}>Blogs</Link>
                <Link to={"/faqs"}>FAQs</Link>
                <Link to={"/contact"}>Contact</Link>
                {/* <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/login">Login & Register</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/blogs">Blogs</Nav.Link>
                  <Nav.Link href="/faqs">FAQs</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link> */}
              </Nav>
            </Container>
          </div>

        <div className="footer-socials">
          <a href="/">
            <FacebookIcon />
          </a>
          <a href="/">
            <TwitterIcon />
          </a>
          <a href="/">
            <LinkedInIcon />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
