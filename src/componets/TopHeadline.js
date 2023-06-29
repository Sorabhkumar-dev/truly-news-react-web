import React from 'react'
import NewsCard from './NewsCard'
import { useEffect, useState } from 'react';
import { getTopHeadline } from '../utils/Network';
import {PAGE_SIZE} from '../utils/Constants'

export default function TopHeadline() {
    const [articles, setArticle] = useState([]);
    const [page,setPage] = useState(0)

    const handlePrevBtnClicked = () => {
      if(page != 0){
        setPage(page-1)
      }  
    }

    const handleNextBtnClicked = () => {
      console.log(`page -> ${page}`)
      if(articles.length % PAGE_SIZE == 0){
        setPage(page+1)
      }
    }

   useEffect(() =>{
    getTopHeadline(page).then( response =>{
        console.log(response.data.articles)
        setArticle(response.data.articles)
         
   }).catch(error =>{
    console.log(error)
    
   })},[page])

  const newsItems = articles.map((article)=>{
   return <NewsCard key={article.url} article={article}/>
   })

  return (
    <>
    <div className='d-flex flex-wrap justify-content-around'>{newsItems}</div>
    <div className='d-flex justify-content-between mx-3 mt-3 mb-5'>
      <button type="button" className="btn btn-primary" onClick={handlePrevBtnClicked}>&laquo; Prev</button>
      <button type="button" className="btn btn-primary" onClick={handleNextBtnClicked}>Next &raquo;</button>
    </div>
    </>
  )
}
