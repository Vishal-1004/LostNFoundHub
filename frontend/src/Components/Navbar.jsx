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
              <li className="nav-item mx-2 btn dropdown px-2">
                <a className="dropdown-toggle" aria-current="page" href="/" data-bs-toggle="dropdown" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg"
                        width="50"
                          height="30" 
                          fill="black" 
                          stroke="white"
                          strokeWidth="0.25px"
                          className="bi bi-person-circle" 
                          viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
          </svg>
                </a>
                <ul className="dropdown-menu">
                      <li ><a className="dropdown-item" href='/'>View Profile</a></li>
                      <li className="log-hover"><a className="logout dropdown-item" href='/'>
                        Logout &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="14" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>
                      </a></li>
                </ul>
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
  .logout{
    color:red !important;
  }
`;

export default Navbar;
