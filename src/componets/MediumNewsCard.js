import React from "react";
import logo from "../asset/icon/news_app_logo.svg";
import '../css/MediumNewsCard.css'

export default function MediumNewsCard(props) {
  return (
    <div className="card d-flex flex-row my-3" style={{ width: "90%", height:"20rem" }}>
      <div className="card-body">
        <div>
          <h5 className="card-title news_title_line_limit">{props.article.title}</h5>
          <p className="card-text news_description_line_limit">{props.article.content}</p>
          <p>{props.article.author}</p>
          <a href={props.article.url} className="btn btn-primary">
            Read More..
          </a>
        </div>
      </div>
      <img className="card-img-top medium_card_image mx-3 my-2" src={props.article.urlToImage} alt="Card image cap" />
    </div>
  );
}
