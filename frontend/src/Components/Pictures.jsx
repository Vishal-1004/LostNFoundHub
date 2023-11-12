import React from "react";
import styled from "styled-components";

function Pictures() {
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
        <div className="container">
          <h2>Lost an Item?</h2>
          <div className="container">
            <div className="row justify-content-between lost-item-content">
              <div className="col-12 col-md-6">
                <ol className="list-group list-group-numbered">
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Login/Register</div>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Possimus, mollitia accusamus? Quis nesciunt nihil animi.
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Lost Item Section</div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Modi ad, maxime error laudantium voluptatibus
                      consequuntur.
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Select Your Item</div>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Rem sed quibusdam atque ex vel mollitia!
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Visit AB-1 2nd Floor</div>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Rem sed quibusdam atque ex vel mollitia!
                    </div>
                  </li>
                </ol>
              </div>
              <div className="col-12 col-md-6">
                <img
                  src="./images/lost-item.png"
                  alt="Lost an item"
                  style={{ width: "100%" }}
                />
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

  .list-group-item {
    border: none !important;
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

    .lost-item-content {
      flex-direction: column-reverse;
    }
  }
`;

export default Pictures;
