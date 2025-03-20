import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfilePage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">Profile</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Profile Section */}
      <section className="container text-center my-5">
        <img src="https://via.placeholder.com/150" className="rounded-circle mb-3" alt="Profile" />
        <h1 className="display-4">John Doe</h1>
        <p className="lead">Full-Stack Developer | Tech Enthusiast</p>
        <p>Passionate about building scalable web applications and exploring new technologies.</p>
      </section>

      {/* Skills Section */}
      <section className="container my-5" id="skills">
        <h2 className="text-center">Skills</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card p-3 shadow">
              <h5>Frontend</h5>
              <p>React, Bootstrap, JavaScript</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 shadow">
              <h5>Backend</h5>
              <p>Node.js, Express, MongoDB</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 shadow">
              <h5>Tools</h5>
              <p>Git, Docker, CI/CD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>&copy; 2025 John Doe. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProfilePage;
