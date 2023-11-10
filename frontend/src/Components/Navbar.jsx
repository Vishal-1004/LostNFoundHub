import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarStyle>
      <nav className="navbar navbar-expand-lg navbar-light navbar-bg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="./images/logo_1.png" alt="Logo" className="logo-icon" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="/">
                  Lost
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="/">
                  Found
                </a>
              </li>
              <li className="nav-item mx-2 btn-nav px-2">
                <a className="nav-link active" aria-current="page" href="/">
                  Sign In
                </a>
              </li>
              <li className="nav-item mx-2 btn-nav px-2">
                <a className="nav-link active" aria-current="page" href="/">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </NavbarStyle>
  );
};

const NavbarStyle = styled.section`
  a {
    color: black !important;
    font-size: 16px;
    font-weight: 500;
  }

  .logo-icon {
    width: 50px;
  }

  .btn-nav {
    background-color: rgba(0, 0, 255, 0.836) !important;
    border-radius: 10px;

    a {
      color: white !important;
    }
  }
`;

export default Navbar;
