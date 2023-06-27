import React from 'react'
import NewsCard from './NewsCard'
import { useEffect, useState } from 'react';
import { getTopHeadline } from '../utils/Network';

export default function TopHeadline() {
    const [articles, setArticle] = useState([]);

   useEffect(() =>{
    getTopHeadline().then( response =>{
        console.log(response.data.articles)
        setArticle(response.data.articles)
         
   }).catch(error =>{
    console.log(error)
    
   })},[])

  const newsItems = articles.map((article)=>{
   return <NewsCard key={article.url} article={article}/>
   })

  return (
    <div className='d-flex flex-wrap justify-content-around'>{newsItems}</div>
  )
}
