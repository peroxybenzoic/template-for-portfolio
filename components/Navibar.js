import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container } from "react-bootstrap";

const Navibar = () => (
  <div>
    <Navbar
      style={{ boxShadow: "0px 3px 6px 0px rgba(0,0,0,0.2)" }}
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="fixed-top"
    >
      <Container>
        <Navbar.Brand href="#home">MyPage</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav>
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
            <Link href="/portfolio">
              <a className="nav-link">Portfolio</a>
            </Link>
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
);

export default Navibar;
