import axios from 'axios';

export const movieApi = axios.create({
  baseURL: process.env.MOVIE_API_URL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.MOVIE_ACCESS_TOKEN}`,
  },
});
