import React from "react";
import newsLogo from "../asset/icon/news_app_logo.svg";
import "../css/NavBar.css"

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img src={newsLogo} alt="truly logo icon" style={{ height: "40px" }} className="mx-2" />
        <a className="navbar-brand text-bold heading" href="#">Truly News</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link nav_item_text_selected" aria-current="page" href="#">
                Top Headline
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav_item_text_unselected" href="#"> All News </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav_item_text_unselected" href="#"> Filter News </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
