import React from 'react';
import styled from 'styled-components';

function PrivacyPolicy() {
  return (
    <PolicyStyle>
      <div className="row ps-5 ">
        <div className="col-12 col-md-8 col-lg-12">
          <div className="main-heading">Privacy Policy</div>
          <div className="p">
            <div>
              <ul>
                <li>
                  <h2>1. Information Collected</h2>
                  <ul>
                    <li>
                      <h3>1.1. The Website collects user-provided information during registration.</h3>
                    </li>
                    <li>
                      <h3>1.2. Lost and Found item information posted by users is also stored.</h3>
                    </li>
                  </ul>
                </li>
                <li>
                  <h2>2. Use of Information</h2>
                  <ul>
                    <li>
                      <h3>2.1. User information is used for account management and communication.</h3>
                    </li>
                    <li>
                      <h3>2.2. Lost and Found item information is displayed on the respective pages.</h3>
                    </li>
                  </ul>
                </li>
                <li>
                  <h2>3. Sharing of Information</h2>
                  <ul>
                    <li>
                      <h3>3.1. User information is not shared with third parties without consent.</h3>
                    </li>
                    <li>
                      <h3>3.2. Found item information may be shared with the claimant.</h3>
                    </li>
                  </ul>
                </li>
                <li>
                  <h2>4. Security</h2>
                  <ul>
                    <li>
                      <h3>4.1. The Website employs security measures to protect user information.</h3>
                    </li>
                    <li>
                      <h3>4.2. Users are responsible for maintaining the security of their login credentials.</h3>
                    </li>
                  </ul>
                </li>
                <li>
                  <h2>5. Cookies</h2>
                  The Website may use cookies to enhance user experience.
                </li>
                <li>
                  <h2>6. Changes to Privacy Policy</h2>
                  The Privacy Policy may be updated without notice. Users are advised to review it regularly.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PolicyStyle>
  );
}

const PolicyStyle = styled.section`
  p {
    font-size: 1.1rem;
    letter-spacing: 0.9px;
    line-height: 1.5rem;
  }

  .main-heading {
    display: inline;
    margin-top: 1rem !important;
    font-size: 2rem;
    font-weight: 400 !important;
    border-bottom: 3px solid #0d6efd;
    margin-left: 38rem !important;
    
  }

  ul {
    list-style-type: none;
    padding: 0;
    padding-left: 15px;
    padding-top: 20px;
  }

  li {
    margin-bottom: 1rem;
    overflow-wrap: break-word;
  }

  h2 {
    font-size: 1.3rem;
    color: #0d6efd;
  }

  h3 {
    font-size: 1.1rem;
    color: #0d6efd;
    padding-left: 24px;
    color: #333;
  }

  /* Media Queries for Responsive Design */
  @media (max-width: 767px) {
    .main-heading {
      margin-left: 69px !important;
      text-align: center;
      font-size: 1.4rem;
    }

    h2{
        padding-left: 0px;
        margin-left: -30px;
        font-size: 1.2rem;
    }
    h3{
        padding-right: 10px;
        font-size: 1rem;
    }
  }
`;

export default PrivacyPolicy;
