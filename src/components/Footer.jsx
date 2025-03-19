
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
       
          <Col md={4} className="mb-3">
            <h5>About AutoDocX</h5>
            <p className="small">
              AutoDocX automates documentation generation for GitHub repositories, making code easier to understand and maintain.
            </p>
          </Col>
         
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/features" className="text-light text-decoration-none">
                  Features
                </a>
              </li>
              <li>
                <a href="/docs" className="text-light text-decoration-none">
                  Docs
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          {/* Social Media */}
          <Col md={4} className="mb-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li className="me-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">
                  Facebook
                </a>
              </li>
              <li className="me-3">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">
                  Twitter
                </a>
              </li>
              <li className="me-3">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">
                  GitHub
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="border-light" />
        <p className="small text-center mb-0">© 2025 AutoDocX. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
