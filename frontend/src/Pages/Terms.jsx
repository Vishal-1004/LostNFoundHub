import React from 'react';
import styled from 'styled-components';

function Terms() {
  return (
    <TermsStyle>
      <div className="container my-3">
        <div className="main-heading m-5 text-center align-items-center">
          Terms and Conditions
        </div>
        <div className="p">
          <ul>
            <li>
              <h2>1. Acceptance of Terms</h2>
              <h3>
                By using the Lost and Found website ("the Website"), you agree
                to comply with and be bound by the following terms and
                conditions.
              </h3>
            </li>
            <li>
              <h2>2. User Registration</h2>
              <ul>
                <li>
                  <h3>
                    2.1. Users must provide accurate and complete information
                    during the registration process.
                  </h3>
                </li>
                <li>
                  <h3>
                    2.2. Users are responsible for maintaining the
                    confidentiality of their login credentials.
                  </h3>
                </li>
                <li>
                  <h3>
                    2.3. Users must promptly notify the website administrator of
                    any unauthorized use of their account.
                  </h3>
                </li>
              </ul>
            </li>
            <li>
              <h2>3. Lost Page</h2>
              <ul>
                <li>
                  <h3>
                    3.1. Users may post information about lost items, including
                    photos and descriptions.
                  </h3>
                </li>
                <li>
                  <h3>
                    3.2. Users must provide valid contact information for
                    potential item retrievals.
                  </h3>
                </li>
              </ul>
            </li>
            <li>
              <h2>4. Found Page</h2>
              <ul>
                <li>
                  <h3>
                    4.1. Users may post information about found items on the
                    Found Page.
                  </h3>
                </li>
                <li>
                  <h3>
                    4.2. Users agree not to request any monetary compensation
                    for returning found items.
                  </h3>
                </li>
              </ul>
            </li>
            <li>
              <h2>5. User Conduct</h2>
              <ul>
                <li>
                  <h3>
                    5.1. Users must conduct themselves in a respectful and
                    lawful manner.
                  </h3>
                </li>
                <li>
                  <h3>
                    5.2. False information or misuse of the platform may result
                    in account suspension.
                  </h3>
                </li>
              </ul>
            </li>
            <li>
              <h2>6. Limitation of Liability</h2>
              <ul>
                <li>
                  <h3>
                    6.1. The Website is not responsible for the accuracy of the
                    information provided by users.
                  </h3>
                </li>
                <li>
                  <h3>
                    6.2. The Website is not liable for any loss or damage
                    resulting from the use of the platform.
                  </h3>
                </li>
              </ul>
            </li>
            <li>
              <h2>7. Termination</h2>
              The website reserves the right to terminate or suspend user
              accounts at its discretion.
            </li>
            <li>
              <h2>8. Changes to Terms</h2>
              The Website may update these terms at any time without notice.
              Users are encouraged to review the terms regularly.
            </li>
          </ul>
        </div>
      </div>
    </TermsStyle>
  );
}

const TermsStyle = styled.section`
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
    margin-left: 30rem !important;
    
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
      margin-left: 79px !important;
      text-align: center;
      font-size: 1.4rem;
    }

    h2{
        padding-left: 15px;
        margin-left: -30px;
        font-size: 1.2rem;
    }
    h3{
        padding-right: 5px;
        font-size: 1rem;
    }
  }
`;

export default Terms;
