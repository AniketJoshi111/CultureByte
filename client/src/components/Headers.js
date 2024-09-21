import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import "./first.css";

import { NavItem } from "react-bootstrap";
import Login from "../test/Login";

function Headers() {
  const { carts } = useSelector((state) => state.allCart);
  const navigate = useNavigate();
  return (
    <>
      <Navbar
        expand="lg"
        className="font-Madimi shadow-xl h-15 text-white bg-green-200"
        data-bs-theme="dark"
      >
        <Navbar.Brand className="ml-4">
          <NavLink to="/" className="text-black text-decoration-none">
            Culture Byte
          </NavLink>
        </Navbar.Brand>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                to="/"
                className="text-black text-decoration-none nav-item-spacing mr-4"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="text-black text-decoration-none nav-item-spacing"
              >
                About us
              </NavLink>
              
              <NavLink to="/contact-us" className="text-black text-decoration-none nav-item-spacing">
              Contact us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          <NavLink
            to="/cart"
            className="text-decoration-none text-light mx-2 flex-end"
          >
            <span
              className="p1 mr-4 fa-2x has-badge gap-2"
              data-count={carts.length}
            >
              <i class="fa-solid fa-cart-shopping text-black"></i>
            </span>
          </NavLink>
          <NavLink to="/sign-in">
            <Login/>
          </NavLink>
        </Container>
      </Navbar>
    </>
  );
}

export default Headers;
