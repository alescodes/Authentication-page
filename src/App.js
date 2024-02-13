import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/UserAccount/Login";
import Login2 from "./Components/TherapistAccount/Login2";
import Register from "./Components/UserAccount/Register";
import Register2 from "./Components/TherapistAccount/ Register2";
import Home from "./Pages/Home";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer></ToastContainer>

      <Router>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Register />}></Route>
          <Route path="/login2" element={<Login2 />}></Route>
          <Route path="/register2" element={<Register2 />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
