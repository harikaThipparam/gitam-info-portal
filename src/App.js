import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
// import Login from "./components/Login/login";

function App() {
  return (
    <Routes>
      {/* <Route exact path="/login" element={<Login />} /> */}
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
