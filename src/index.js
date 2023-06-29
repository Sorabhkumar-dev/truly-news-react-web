import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import NavBar from "./componets/NavBar";
import AllNews from "./componets/AllNews";
import TopHeadline from "./componets/TopHeadline";
import CategoryNews from "./componets/CategoryNews";
import { ALL_NEWS, CATEGORY_NEWS } from "./utils/Constants";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<TopHeadline />} />
      <Route path={ALL_NEWS} element={<AllNews />} />
      <Route path={CATEGORY_NEWS} element={<CategoryNews />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
