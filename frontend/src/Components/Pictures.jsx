import React from "react";
import styled from "styled-components";

function Pictures() {
  return (
    <PictureStyle>
      <div>
        <h1 className="slogan-container">
          LOST ON CAMPUS FOUND ONLINE: BRINGING BELONGINGS BACK TO YOU
        </h1>
        <div>
          <h1>Lost an Item?</h1>
          <div className="content-container">
            <div className="steps-container">
              <span className="directions-container">
                <b>Steps:</b>
                <br />
                <ul>
                  <li>Step 1: Lorem Ipsum is simply dummy text</li>
                  <li>
                    Step 2: Lorem Ipsum has been the industry's standard dummy
                    text
                  </li>
                  <li>
                    Step 3: It was popularised in the 1960s with the release of
                    Letraset sheets
                  </li>
                  <li>
                    Step 4: It has survived not only five centuries, but also
                    the leap into electronic typesetting, remaining essentially
                    unchanged.
                  </li>
                  <li>
                    Step 5: Contrary to popular belief, Lorem Ipsum is not
                    simply random text. It has roots in a piece of classical
                    Latin literature from 45 BC, making it over 2000 years old.
                  </li>
                </ul>
              </span>
            </div>
            <div className="picture-container">
              <img src="./images/lostandfound.png" alt="text" />
            </div>
          </div>
        </div>
      </div>
    </PictureStyle>
  );
}

const PictureStyle = styled.section`
  h1 {
    // text-align: center;
    padding-left: 210px;
    font-size: 3.5em;
  }
  .slogan-container {
    text-align: center !important;
  }
  .content-container {
    display: flex;
    justify-content: space-between;
    padding: 30px 200px;
  }

  .picture-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 40vh;
  }

  .steps-container {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    padding-left: 15px;
    padding-top: 15px;
  }

  .directions-container {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 768px) {
    /* Apply styles for screens wider than 768px (adjust as needed) */
    .content-container {
      flex-direction: row;
      justify-content: space-between;
    }

    .picture-container,
    .steps-container {
      width: 48%;
    }

    .picture-container {
      order: 2;
    }
  }
  ul {
    list-style: none;
    padding: 0;
  }

  li::before {
    content: "👉 ";
  }
`;

export default Pictures;
