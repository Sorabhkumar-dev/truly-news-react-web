import React from "react";
import newsLogo from "../asset/icon/news_app_logo.svg";
import "../css/NavBar.css";
import { NavLink } from "react-router-dom";
import {
  ALL_NEWS,
  CATEGORY_NEWS,
  COLOR_PRIMARY,
  COLOR_SECONDORY,
} from "../utils/Constants";

export default function NavBar() {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img
          src={newsLogo}
          alt="truly logo icon"
          style={{ height: "40px" }}
          className="mx-2"
        />
        <NavLink className="navbar-brand text-bold heading" to="/">
          Truly News
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link nav_item_text"
                aria-current="page"
                to="/"
                style={({ isActive }) => {
                  return {
                    color: isActive ? COLOR_PRIMARY :COLOR_SECONDORY
                  };
                }}
           >
                Top Headline
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav_item_text" to={ALL_NEWS}  style={({ isActive }) => {
                  return {
                    color: isActive ? COLOR_PRIMARY :COLOR_SECONDORY
                  };
                }}>
                All News
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav_item_text" to={CATEGORY_NEWS}  style={({ isActive }) => {
                  return {
                    color: isActive ? COLOR_PRIMARY :COLOR_SECONDORY
                  };
                }}>
                Catgory News
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
