import React from "react";
import styled from "styled-components";

function Hero() {
  return (
    <PictureStyle>
      <div className="content-container">
        <div className="column profile-picture">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="250"
            className="bi bi-person-square"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
          </svg>
        </div>
        <div className="column">
          <div className="text-field">
            <label htmlFor="name">
              <b>Name:</b>
            </label>
            <input type="text" id="name" />
          </div>
          <div className="text-field">
            <label htmlFor="regNo">
              <b>Reg. No:</b>
            </label>
            <input type="text" id="regNo" />
          </div>
          <div className="text-field">
            <label htmlFor="changePassword">
              <b>Change Password:</b>
            </label>
            <input type="password" id="changePassword" />
          </div>
          <div className="button-container">
            <button type="button" className="save-button">
              Save
            </button>
          </div>
        </div>
        <div className="column">
          <div className="text-field">
            <label htmlFor="dayHosteller">
              <b>DayScholar/Hosteller:</b>
            </label>
            <input type="text" id="dayHosteller" />
          </div>
          <div className="text-field">
            <label htmlFor="email">
              <b>Email:</b>
            </label>
            <input type="text" id="email" />
          </div>
          <div className="text-field">
            <label htmlFor="confirmPassword">
              <b>Confirm Password:</b>
            </label>
            <input type="password" id="confirmPassword" />
          </div>
        </div>
      </div>
    </PictureStyle>
  );
}

const PictureStyle = styled.section`
  .content-container {
    display: flex;
    justify-content: space-between;
  }

  .column {
    flex: 1;
    margin: 0 8rem;
  }

  .profile-picture {
    flex: 1;
  }

  .text-field {
    margin-bottom: 1rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.7em;
  }

  input {
    width: 100%;
    padding: 0.3rem;
    font-size: 0.9em;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid #ccc;
    outline: none;
  }

  .button-container {
    margin-top: 1rem;
  }

  .save-button {
    padding: 0.5rem 1rem;
    font-size: 0.9em;
    background-color: rgba(0, 0, 255, 0.836);
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export default Hero;
