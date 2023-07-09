import axios from 'axios'
import { PAGE_SIZE } from './Constants';

const NEWS_BASE_URL = "https://newsapi.org/v2/"

export const getTopHeadline = async (page,category) => await axios.get(`${NEWS_BASE_URL}/top-headlines?country=in&category=${category}&page=${page}&pageSize=${PAGE_SIZE}&apiKey=f5cd498bf1ed4abaa3acd25694c95808`);

export const getAllNews = async (page) => await axios.get(`${NEWS_BASE_URL}/everything?q=india&page=${page}&pageSize=${PAGE_SIZE}&apiKey=f5cd498bf1ed4abaa3acd25694c95808`);

  