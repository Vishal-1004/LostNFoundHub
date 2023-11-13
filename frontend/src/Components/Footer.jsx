import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="container footer-container">
        <footer className="row row-cols-5 py-4 my-1">
          <div className="col">
            <a
              href="/"
              className="d-flex align-items-center mb-3 link-dark text-decoration-none"
            >
              <img
                src="./images/logo.png"
                alt="logo"
                style={{ width: "72px" }}
              />
            </a>
            <p className="text-muted">
              Lost&FoundHub © 2023 <br /> All Rights Reserved
            </p>
          </div>

          <div className="col"></div>

          <div className="col">
            <h5>Quick Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Lost
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Found
                </a>
              </li>
              <li className="nav-item mb-2 btn-nav">
                <a className="nav-link active" aria-current="page" href="/">
                  Sign In
                </a>
              </li>
              <li className="nav-item mb-2 btn-nav">
                <a className="nav-link active" aria-current="page" href="/">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>About Us</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Vishal Kumar Yadav
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Aditya
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Surya
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>Support Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Terms & Conditions
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Privacy Policies
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Report Issue
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </FooterStyle>
  );
};

const FooterStyle = styled.section`
  .footer-container {
    margin-top: 2rem;
  }

  .btn-nav {
    background-color: rgba(0, 0, 255, 0.836) !important;
    border-radius: 10px;
    width: 5.5rem;

    a {
      color: white !important;
    }
  }
`;

export default Footer;
