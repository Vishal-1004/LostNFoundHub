import React, { Fragment } from "react";
import styled from "styled-components";
import { Timeline, Event } from "./Timeline";

function Hero() {
  return (
    <PictureStyle>
      <div>
        <div className="top-heading d-flex flex-column align-items-center">
          <h1 className="slogan-container">
            LOST ON CAMPUS <br /> FOUND ONLINE:
            <br /> BRINGING BELONGINGS
            <br /> BACK TO YOU
          </h1>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <button type="button" className="btn btn-primary mx-3 py-2 px-3">
              Lost Something?
            </button>
            <button type="button" className="btn btn-primary mx-3 py-2">
              Found Something?
            </button>
          </div>
        </div>
        <div className="bg-white content">
          <div className="container">
            <div className="row justify-content-between lost-item-content">
              <div className="col-12 col-md-6 my-2">
                <h2>Lost an Item?</h2>
                <Fragment>
                  <Timeline>
                    <Event interval={"Step 1"} title={"Lorem"}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Cumque ratione eligendi animi nemo consectetur asperiores?
                    </Event>
                    <Event interval={"Step 2"} title={"Lorem"}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Cumque ratione eligendi animi nemo consectetur asperiores?
                    </Event>
                    <Event interval={"Step 3"} title={"Lorem"}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Cumque ratione eligendi animi nemo consectetur asperiores?
                    </Event>
                    <Event interval={"Step 4"} title={"Lorem"}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Cumque ratione eligendi animi nemo consectetur asperiores?
                    </Event>
                  </Timeline>
                </Fragment>
              </div>
              <div className="col-12 col-md-6 my-2">
                <h2>Found an Item?</h2>
                <Fragment>
                  <Timeline>
                    <Event interval={"Step 1"} title={"Lorem"}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Cumque ratione eligendi animi nemo consectetur asperiores?
                    </Event>
                    <Event interval={"Step 2"} title={"Lorem"}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Cumque ratione eligendi animi nemo consectetur asperiores?
                    </Event>
                    <Event interval={"Step 3"} title={"Lorem"}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Cumque ratione eligendi animi nemo consectetur asperiores?
                    </Event>
                    <Event interval={"Step 4"} title={"Lorem"}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Cumque ratione eligendi animi nemo consectetur asperiores?
                    </Event>
                  </Timeline>
                </Fragment>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PictureStyle>
  );
}

const PictureStyle = styled.section`
  h1 {
    font-size: 3.5em;
    font-weight: 600;
  }

  .content {
    padding: 2rem 0 !important;
  }

  .top-heading {
    margin: 2rem 0 5rem 0;
  }

  .slogan-container {
    text-align: center !important;
    margin: 2rem 0px 2rem 0px;
    color: #35363a;
  }

  .content-container {
    display: flex;
    justify-content: space-between;
  }

  .directions-container {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5em;
      font-weight: 600;
    }

    .top-heading {
      margin: 1rem 0 3rem 0;
    }

    .btn {
      font-size: 0.8rem;
    }
  }
`;

export default Hero;
