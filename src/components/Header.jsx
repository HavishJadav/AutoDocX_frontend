import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        {/* Brand / Logo */}
        <Navbar.Brand href="#" className="fw-bold fs-3">
           AutoDocX
        </Navbar.Brand>

        {/* Toggle Button for Mobile View */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          {/* Navigation Links */}
          <Nav className="ms-auto">
            <Nav.Link href="#" className="mx-2">Home</Nav.Link>
            <Nav.Link href="#" className="mx-2">Features</Nav.Link>
            <Nav.Link href="#" className="mx-2">Upload Repo</Nav.Link>
            <Nav.Link href="#" className="mx-2">Docs</Nav.Link>
          </Nav>

          {/* GitHub Icon */}
          <Nav className="ms-3">
            <Nav.Link href="https://github.com/" target="_blank" className="text-white fs-4">
              <FaGithub />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
