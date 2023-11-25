import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { loginUser } from "../Store/Slices/UserSlice";

const Login = () => {
  const Navigate = useNavigate();
  const Dispatch = useDispatch();
  const [user, setUser] = useState({ regNo: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = async () => {
    await axios.post("http://localhost:5000/login", user).then((res) => {
      alert(res.data.message);
      Dispatch(loginUser(res.data.user));
      sessionStorage.setItem("id", res.data.user._id);
      Navigate("/");
      //console.log(res.data.user);
    });
  };

  return (
    <LoginStyle>
      <div className="App">
        <div className="login">
          <h1>Login</h1>
          <input
            type="text"
            name="regNo"
            value={user.regNo}
            placeholder="Enter your Registration Number"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Enter your Password"
            onChange={handleChange}
          />
          <div className="button" onClick={login}>
            Login
          </div>
          <div>or</div>
          <div className="button" onClick={() => Navigate("/register")}>
            Register
          </div>
        </div>
      </div>
    </LoginStyle>
  );
};

const LoginStyle = styled.section`
  .App {
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background: #f0f2f5;
    font-family: Arial, sans-serif;
  }

  .login {
    width: 400px;
    background: #fff;
    border: 1px solid #dddfe2;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    border-radius: 8px;
    padding: 1rem;
    align-items: center;
    text-align: center;
  }

  .login > input {
    border-radius: 8px;
    border: 2px solid #dddfe2;
    outline: none;
    color: #1d2129;
    margin: 0.5rem 0;
    padding: 0.5rem 0.75rem;
    width: 92%;
    font-size: 1rem;
  }

  .login > .button {
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
`;

export default Login;
