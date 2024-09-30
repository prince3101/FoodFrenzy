import React from "react";
import Logo from "../assets/images/Logo.png";
import { NavLink } from "react-router-dom";

const header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} width={80} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/table">
                  Table
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  KOT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">
                  Billing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default header;
