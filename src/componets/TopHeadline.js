import React from "react";
import NewsCard from "./NewsCard";
import { useEffect, useState } from "react";
import { getTopHeadline } from "../utils/Network";
import { PAGE_SIZE } from "../utils/Constants";
import ErrorLottie from "./ErrorLottie";
import LoadingLottie from "./LoadingLottie";

export default function TopHeadline() {
  const [articles, setArticle] = useState([]);
  const [page, setPage] = useState(0);
  const [isShowError, setIsShowError] = useState(false);
  const [isShowloading, setIsShowLoading] = useState(true);

  const handlePrevBtnClicked = () => {
    if (page != 0) {
      setPage(page - 1);
    }
  };

  const handleNextBtnClicked = () => {
    if (articles.length % PAGE_SIZE == 0) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    setIsShowLoading(true)
    getTopHeadline(page)
      .then((response) => {
        setIsShowLoading(false)
        setIsShowError(false)
        setArticle(response.data.articles);
      })
      .catch((error) => {
        setIsShowError(true);
        setIsShowLoading(false)
      });
  }, [page]);

  const newsItems = articles.map((article) => {
    return <NewsCard key={article.url} article={article} />;
  });

  let content;
  if (isShowloading) {
    content = <LoadingLottie />;
  } else if (isShowError) {
    content = <ErrorLottie />;
  } else {
    content = (
      <div>
        <>
          <div className="d-flex flex-wrap justify-content-around">
            {newsItems}
          </div>
          <div className="d-flex justify-content-between mx-3 mt-3 mb-5">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handlePrevBtnClicked}
            >
              &laquo; Prev
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleNextBtnClicked}
            >
              Next &raquo;
            </button>
          </div>
        </>
      </div>
    );
  }
  return content;
}
