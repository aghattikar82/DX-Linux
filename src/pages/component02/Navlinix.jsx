import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navlinix = () => {
  return (
    <div>
      {/* Main Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img
              src="./images/linixpag.png"
              alt="Linix Computer Training"
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

      {/* Secondary Navigation Bar */}
      <nav className="menu01 bg-secondary py-2">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link text-white" href="/component02">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/courselinix">Course</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/facultylinix">Faculty</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/gallerylinix">Gallery</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/downloadlinix">Download</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/contactlinix">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navlinix;
