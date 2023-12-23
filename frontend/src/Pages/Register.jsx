import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Register = () => {
  const Navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    regNo: "",
    dayORhostel: "None",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = async () => {
    const { name, email, regNo, password, reEnterPassword, dayORhostel } = user;
    if (
      name &&
      email &&
      regNo &&
      dayORhostel &&
      password &&
      password === reEnterPassword
    ) {
      //console.log(dayORhostel);
      if (user.dayORhostel === "None") {
        alert("Select Day Scholar or Hosteler input field");
        return;
      } else if (!email.includes("@vitstudent.ac.in")) {
        alert("Enter valid college Email Id");
      }
      /*const dayORhostel =
        user.dayORhostel.toUpperCase() === "YES" ? "Hosteler" : "Day Scholar";*/
      const data = {
        name,
        email,
        regNo,
        password,
        reEnterPassword,
        dayORhostel,
      };
      await axios.post("http://localhost:5000/register", data).then((res) => {
        alert(res.data.message);
        Navigate("/login");
      });
    } else {
      alert("Enter all input fields");
    }
  };

  return (
    <RegisterStyle>
      <div className="App">
        <div className="register">
          <h1>Register</h1>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
          <input
            type="text"
            name="regNo"
            value={user.regNo}
            onChange={handleChange}
            placeholder="Your Registration Number"
          />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
          <select
            className={
              user.dayORhostel === "None"
                ? "form-select text-muted"
                : "form-select"
            }
            id="exampleFormControlSelect"
            aria-label="Select Day Scholar or Hosteller"
            name="dayORhostel"
            value={user.dayORhostel}
            onChange={handleChange}
          >
            <option value="None">Select Day Scholar / Hosteler</option>
            <option value="Day Scholoar">Day Scholar</option>
            <option value="Hosteler">Hosteler</option>
          </select>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Your Password"
          />
          <input
            type="password"
            name="reEnterPassword"
            value={user.reEnterPassword}
            onChange={handleChange}
            placeholder="Re-enter Password"
          />
          <div className="button" onClick={register}>
            Register
          </div>
          <div>or</div>
          <div className="button" onClick={() => Navigate("/login")}>
            Login
          </div>
        </div>
      </div>
    </RegisterStyle>
  );
};

const RegisterStyle = styled.section`
  .App {
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background: #f0f2f5;
    font-family: Arial, sans-serif;
  }

  .register {
    width: 400px;
    background: #fff;
    border: 1px solid #dddfe2;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    border-radius: 8px;
    padding: 1rem;
    align-items: center;
    text-align: center;
  }

  .register > input {
    border-radius: 8px;
    border: 2px solid #dddfe2;
    outline: none;
    color: #1d2129;
    margin: 0.5rem 0;
    padding: 0.5rem 0.75rem;
    width: 92%;
    font-size: 1rem;
  }

  .register > .button {
    background: #1877f2;
    border: 1px solid #1877f2;
    color: #fff;
    font-size: 1.25rem;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
  }

  .register > select {
    border-radius: 8px;
    border: 2px solid #dddfe2;
    outline: none;
    color: #1d2129;
    margin: 8px 15px;
    width: 92%;
    height: 45px;
  }
`;

export default Register;
