import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Lost from "./Pages/Lost";
import Found from "./Pages/Found";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import PrivateRoute from "./Components/PrivateRoute";
import { useSelector } from "react-redux";

function App() {
  const userState = useSelector((state) => state.users);

  return (
    <Router>
      <PrivateRoute component={<Navbar />} />
      <Routes>
        <Route path="/" element={userState ? <Home /> : <Login />} />
        <Route path="/lost" element={userState ? <Lost /> : <Login />} />
        <Route path="/found" element={userState ? <Found /> : <Login />} />
        <Route path="/profile" element={userState ? <Profile /> : <Login />} />
        <Route path="/register" element={userState ? <Home /> : <Register />} />
        <Route path="/login" element={userState ? <Home /> : <Login />} />
      </Routes>
      <PrivateRoute component={<Footer />} />
    </Router>
  );
}

export default App;
