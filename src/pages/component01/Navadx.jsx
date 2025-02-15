import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navadx = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img
              src="./images/dxmain.png"
              alt="DX Technical College"
              className="nav-logo"
              style={{ height: "50px", marginRight: "10px" }}
            />
          </a>
          <form className="d-flex ms-auto" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ maxWidth: "300px" }}
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <nav className="menu01 bg-primary py-2">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link text-white" href="/component01">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/coursedx">Course</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/facultydx">Faculty</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/gallerydx">Gallery</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/downloaddx">Download</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/contactdx">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navadx;
