import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Lost from "./Pages/Lost";
import Found from "./Pages/Found";
import BackToTop from "./Components/ScrollButton";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lost" element={<Lost />} />
        <Route path="/found" element={<Found />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <BackToTop />
      <Footer />
    </Router>
  );
}

export default App;
