
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css"; 
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } = useAuth0();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3 custom-brand">
          AutoDocX
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" className="custom-toggle" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto custom-nav">
            <Nav.Link as={Link} to="/" className="mx-2 custom-nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/features" className="mx-2 custom-nav-link">
              Features
            </Nav.Link>
            <Nav.Link as={Link} to="/searchbar" className="mx-2 custom-nav-link">
              Upload Repo
            </Nav.Link>
            <Nav.Link href="#" className="mx-2 custom-nav-link">
              Docs
            </Nav.Link>
          </Nav>

          <Nav className="ms-3">
            <Nav.Link
              href="https://github.com/"
              target="_blank"
              className="text-white fs-4 custom-nav-link"
            >
              <FaGithub />
            </Nav.Link>
          </Nav>

          <Nav className="ms-3 align-items-center custom-auth">
            {isLoading && <span className="text-white mx-2">Loading...</span>}

            {isAuthenticated && user && (
              <>
                <span className="text-info fw-bold fs-6 mx-2 custom-user-email">
                  {user.email}
                </span>
                <Button
                  variant="outline-info"
                  size="sm"
                  className="mx-2 rounded-pill custom-btn"
                  onClick={() =>
                    logout({ logoutParams: { returnTo: window.location.origin } })
                  }
                >
                  Log Out
                </Button>
              </>
            )}

            {!isAuthenticated && !isLoading && (
              <Button
                variant="outline-info"
                size="sm"
                className="mx-2 rounded-pill custom-btn"
                onClick={() => loginWithRedirect()}
              >
                Log In
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
