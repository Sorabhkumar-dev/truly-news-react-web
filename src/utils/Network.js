import axios from 'axios'

const NEWS_BASE_URL = "https://newsapi.org/v2/"

export const getTopHeadline = async () => await axios.get(`${NEWS_BASE_URL}/top-headlines?country=in&category=business&apiKey=f5cd498bf1ed4abaa3acd25694c95808`);

  