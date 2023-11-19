import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ScrollButton from "./Components/ScrollButton";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Lost from "./Pages/Lost";
import Found from "./Pages/Found";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import PrivateRoute from "./Components/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loginUser } from "./Store/Slices/UserSlice";

function App() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.users);

  useEffect(() => {
    const id = sessionStorage.getItem("id");
    console.log(id);
    if (id) {
      dispatch(loginUser(id));
    }
  }, []);

  return (
    <Router>
      <PrivateRoute component={<Navbar />} />
      <Routes>
        <Route path="/" element={userState.isLoggedIn ? <Home /> : <Login />} />
        <Route
          path="/lost"
          element={userState.isLoggedIn ? <Lost /> : <Login />}
        />
        <Route
          path="/found"
          element={userState.isLoggedIn ? <Found /> : <Login />}
        />
        <Route
          path="/profile"
          element={userState.isLoggedIn ? <Profile /> : <Login />}
        />
        <Route
          path="/register"
          element={userState.isLoggedIn ? <Home /> : <Register />}
        />
        <Route
          path="/login"
          element={userState.isLoggedIn ? <Home /> : <Login />}
        />
      </Routes>
      <PrivateRoute component={<Footer />} />
      <PrivateRoute component={<ScrollButton />} />
    </Router>
  );
}

export default App;
