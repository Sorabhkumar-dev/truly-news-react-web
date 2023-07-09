import FilterCard from './FilterCard';
import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { getTopHeadline } from "../utils/Network";
import { PAGE_SIZE } from "../utils/Constants";
import ErrorLottie from "./ErrorLottie";
import LoadingLottie from "./LoadingLottie";


export default function CategoryNews() {
    const category = ["business","entertainment","general","health","science","sports","technology"];
    const [selectedCategory,setSelctedCategory] = useState(category[0]);

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
      getTopHeadline(page,selectedCategory)
        .then((response) => {
          setIsShowLoading(false)
          setIsShowError(false)
          setArticle(response.data.articles);
        })
        .catch((error) => {
          setIsShowError(true);
          setIsShowLoading(false)
        });
    }, [page,selectedCategory]);

    const categories = category.map((filter) => {
      return <FilterCard filterItem = {filter} 
      key = {filter}
      isSelected = {selectedCategory === filter} 
      onClick = { (filter) =>{
       console.log(`${filter}`)
       setSelctedCategory(filter)
      }}/>
   });

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

  return (
    <>
    <div className='d-flex my-2 mx-3'>
      {categories}
    </div>
    {content}
    </>
  )
}
