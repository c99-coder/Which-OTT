import "./app.css";
import React, { useContext } from "react";
import Main from "./components/pages/main.jsx";
import Login from "./components/pages/login.jsx";
import Register from "./components/pages/signUp.jsx";
import Stat from "./components/pages/stat.jsx";
import Test from "./components/pages/classTest.jsx";
import Recommend from "./components/pages/recommend.jsx";
import Result from "./components/pages/result.jsx";
import { Route, Routes, useNavigate } from "react-router-dom";
import AuthRoute from "./components/routes/AuthRoute";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Main />} />
      <Route path="/main" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/stat" element={<Stat />} />
      <Route path="/test" element={<Test />} />
      <Route path="/recommend" element={<Recommend />} />
      {/* <AuthRoute path="/result" element={Result} /> */}
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
