import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function MainNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-black">
      <Container>
        <Navbar.Brand href="#home" className="gredient-text">
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="white-text"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="#features" className="white-text">
              Features
            </Nav.Link>
            <Nav.Link href="#pricing" className="white-text">
              Pricing
            </Nav.Link>
            <Nav.Link href="#pricing2" className="white-text">
              Pricing
            </Nav.Link>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets" className="white-text">
              More deets
            </Nav.Link> */}
            <Nav.Link eventKey={2} href="#memes" className="navbar-btn">
              Get Started
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
