import React from "react";
import styled from "styled-components";

export default function ContactUs() {
  return (
    <ContactUsStyle>
      <div className="container py-4">
        <div className="my-4">
          <h1>Contact Us</h1>
          <hr style={{ border: "1px solid #0c0c0c" }} />
        </div>
        <div className="row sec_sp">
          <div lg="5" className="col-12 col-md-6">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>
              <span>&nbsp;&nbsp;lostandfoundhub23@gmail.com</span>
              <br />
            </address>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex amet
              facere in. Iure quis laboriosam neque minus odit quo perferendis
              iste eligendi quibusdam facere, molestiae error saepe quam culpa
              voluptates asperiores magni modi! At, voluptas atque sint id
              similique assumenda alias aut inventore sequi quisquam ea
              quibusdam? Dignissimos, porro aspernatur!
            </p>
          </div>
          <div lg="7" className="col-12 col-md-6 d-flex align-items-center">
            <form className="contact__form w-100">
              <div className="row">
                <div lg="6" className="col form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    required
                  />
                </div>
                <div lg="6" className="col form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </div>
              </div>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                required
              ></textarea>
              <br />
              <div className="row">
                <div lg="12" className="col form-group">
                  <button className="btn btn-primary" type="submit">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ContactUsStyle>
  );
}

const ContactUsStyle = styled.section`
  .contact__form .form-control {
    padding: 1.375rem 0.75rem;
    line-height: 1.5;
    background-color: inherit;
    border-radius: 0 !important;
    border: 1px solid #0c0c0c;
  }

  .contact__form input.form-control {
    margin-bottom: 2em;
    height: calc(2.5em + 0.75rem + 2px);
  }
`;
