import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavScroll.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";


function NavScroll() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container
          fluid
          style={{ display: "flex", justifyContent: "space-between" }}
          className="nav1 flex-space"
        >
          <Navbar.Brand href="/">
            <img className="logo" src="assets/logo.png" alt="logo" />
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          {/* <Navbar.Collapse id="navbarScroll" className="flex-space nav1-content flex-right" > */}
              {/* <Form className="d-flex search-bar">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
              <div className="social-icons">
              <Nav.Link href="/"><FacebookIcon /></Nav.Link>
              <Nav.Link href="/"><TwitterIcon /></Nav.Link>
              <Nav.Link href="/"><LinkedInIcon /></Nav.Link>
              </div>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>

      <Navbar bg="dark" variant="dark" className="nav2-container">
        <Container
          
          className="nav2"
        >
            <Nav className="nav2-links">
            <Link to={'/'}>Home</Link>
            <Link to={'/login'}>Login & Register</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/blogs'}>Blogs</Link>
            <Link to={'/faqs'}>FAQs</Link>
            <Link to={'/contact'}>Contact</Link>
              {/* <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/login">Login & Register</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/blogs">Blogs</Nav.Link>
              <Nav.Link href="/faqs">FAQs</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link> */}
            </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavScroll;
