import React from "react";
import styled from "styled-components";

function Hero() {
  return (
    <PictureStyle>
      <div className="container my-5 py-2">
        <div className="row">
        <div className="col md-3">
          <div className="position-relative image-container">
          <svg xmlns="http://www.w3.org/2000/svg"
           width="200"
            height="180" 
            fill="black" 
            // stroke="black"
            // strokeWidth="0.25px"
            className="bi bi-person-circle bg-secondary" 
            viewBox="0 0 16 16">
           <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
           <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
          </svg>
          <div className="overlay position-absolute bg-secondary text-light start-0 bottom-0 text-center py-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
           <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
          </svg> Edit Image </div>
          </div>
        
        </div>
        <div className="col md-3 py-2">
          <div className="text-field">
            <label htmlFor="name">
              <b>Name:</b>
            </label>
            <input type="text" id="name"  className="input-box"/>
          </div>
          <div className="text-field">
            <label htmlFor="regNo">
              <b>Reg. No:</b>
            </label>
            <input type="text" id="regNo"className="input-box" />
          </div>
          <div className="text-field">
            <label htmlFor="changePassword">
              <b>Change Password:</b>
            </label>
            <input type="password" id="changePassword" className="form-control" />
          </div>
          <div className="button-container">
            <button type="save" className="save-button my-3">
              Save
            </button>
          </div>
        </div>
        <div className="col md-3 py-2 ">
          <div className="text-field">
            <label htmlFor="dayHosteller">
              <b>DayScholar/Hosteller:</b>
            </label>
            <input type="text" id="dayHosteller"className="input-box" />
          </div>
          <div className="text-field">
            <label htmlFor="email">
              <b>Email:</b>
            </label>
            <input type="text" id="email" className="input-box" />
          </div>
          <div className="text-field">
            <label htmlFor="confirmPassword">
              <b>Confirm Password:</b>
            </label>
            <input type="password" id="confirmPassword" className="form-control" />
          </div>
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
  .image-container{
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
    font-size: 0.83em;
    letter-spacing:0.5px;
  }

    .input-box {
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

  .overlay{
    margin-left:0;
    width:200px;
    cursor:pointer;
  }
`;

export default Hero;
