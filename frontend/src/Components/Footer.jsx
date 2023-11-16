import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="container footer-container">
        <footer className="row  py-4 my-1">
          <div className="col-12 col-md-3 logo-slogan">
            <Link
              to="/"
              className="d-flex align-items-center mb-3 link-dark text-decoration-none"
            >
              <img
                src="./images/logo_1.png"
                alt="logo"
                style={{ width: "72px" }}
              />
            </Link>
            <p className="text-muted text-white">
              Lost&FoundHub © 2023 <br /> All Rights Reserved
            </p>
          </div>

          <div className="col-12 col-md-3">
            <h5>Quick Links</h5>
            <ul className="nav flex-column quick-link">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-muted text-white">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-muted text-white">
                  Lost
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-muted text-white">
                  Found
                </Link>
              </li>
              <li className="nav-item mb-2 btn-nav">
                <Link className="nav-link active" aria-current="page" to="/">
                  Sign In
                </Link>
              </li>
              <li className="nav-item mb-2 btn-nav">
                <Link className="nav-link active" aria-current="page" to="/">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3">
            <h5>About Us</h5>
            <ul className="nav flex-column about-us">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-muted text-white">
                  Vishal Kumar Yadav
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-muted text-white">
                  Aditya
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-muted text-white">
                  Surya
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3">
            <h5>Support Links</h5>
            <ul className="nav flex-column support-links">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-muted text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-muted text-white">
                  Privacy Policies
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-muted text-white">
                  FAQs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-muted text-white">
                  Report Issue
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </FooterStyle>
  );
};

const FooterStyle = styled.section`
  background-color: #3385ff !important;

  .footer-container {
    margin-top: 2rem;
  }

  .text-white {
    color: white !important;
  }

  .btn-nav {
    background-color: rgba(0, 0, 255, 0.836) !important;
    border-radius: 10px;
    width: 5.5rem;

    a {
      color: white !important;
    }
  }

  @media (max-width: 768px) {
    .logo-slogan {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }

    .quick-link,
    .about-us,
    .support-links {
      display: flex;
      align-items: center;
      flex-direction: row !important;
      justify-content: space-evenly;
      flex-wrap: wrap;
    }
  }
`;

export default Footer;
