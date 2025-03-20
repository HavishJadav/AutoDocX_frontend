import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DashboardPage = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-dark text-white p-3 vh-100 d-flex flex-column" style={{ width: "250px" }}>
        <h3 className="text-center">Dashboard</h3>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link text-white" href="#overview">Overview</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#analytics">Analytics</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#settings">Settings</a>
          </li>
        </ul>
        <div className="mt-auto">
          <button className="btn btn-danger w-100">Logout</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-fluid p-4">
        <h2>Welcome to the Dashboard</h2>
        <p>This is an enhanced dashboard layout using React and Bootstrap.</p>
        <div className="row">
          <div className="col-md-4">
            <div className="card p-3 text-center shadow">
              <h5>Total Users</h5>
              <p className="fs-4 fw-bold">1,250</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 text-center shadow">
              <h5>Active Sessions</h5>
              <p className="fs-4 fw-bold">320</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 text-center shadow">
              <h5>Revenue</h5>
              <p className="fs-4 fw-bold">$12,500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
