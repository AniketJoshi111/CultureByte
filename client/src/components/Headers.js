import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./first.css"
function Headers() {
  const { carts } = useSelector((state) => state.allCart);

  return (
    <>
    <Navbar expand="lg" className="shadow-md h-30 text-white" bg="light" data-bs-theme="dark">
    <Navbar.Brand className="ml-4">
    <NavLink to="/home" className="text-black text-decoration-none">Culture Byte</NavLink></Navbar.Brand>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
          <NavLink to="/home" className="text-black text-decoration-none nav-item-spacing" >Home</NavLink> 
          
            <NavLink to="/about" className="text-black text-decoration-none nav-item-spacing">About us</NavLink>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
        <NavDropdown.Item as="div">
          <NavLink to="/region-maha" className="dropdown-item ">Maharashtra</NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item as="div">
          <NavLink to="/region-south" className="dropdown-item">SouthIndia</NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item as="div">
          <NavLink to="/region-rajasthan" className="dropdown-item">Rajasthan</NavLink>
        </NavDropdown.Item>
      </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <NavLink
          to="/cart"
          className="text-decoration-none text-light mx-2 flex-end"
        >
          <div id="ex4">
            <span
              className="p1 fa-stack fa-2x has-badge"
              data-count={carts.length}
            >
              <i class="fa-solid fa-cart-shopping "></i>
            </span>
          </div>
        </NavLink>
      </Container>
    </Navbar>
    
    </>

  );
}

export default Headers;
