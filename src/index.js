// package

import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";
// import App1 from "./App1.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Edit from "./Edit"
import App1 from "./App1";
import View from "./View"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <App/>

  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/" element={<App1/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/edit" element={<Edit/>} />
      <Route path="/view" element={<View/>} />
      <Route path="/example" element={<View/>} />
    </Routes>
  </BrowserRouter>

  // <App1/>
);
