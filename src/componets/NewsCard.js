import React from 'react'
import "../css/NewsCard.css"

export default function NewsCard(props) {
  return (
    <div className="card px-3 my-3" style={{ width: "18rem"}}>
    <img src={props.article.urlToImage} className="card-img-top news_image mt-3" alt="" style={{height:"12rem"}} />
    <div className="card-body">
      <h5 className="card-title news_title_line_limit">{props.article.title}</h5>
      <p className="card-text news_description_line_limit">{props.article.description}</p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
  )
}
