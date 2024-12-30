import axios from 'axios';

export const movieApi = axios.create({
  baseURL: process.env.MOVIE_API_URL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.MOVIE_ACCESS_TOKEN}`,
  },
});

movieApi.interceptors.response.use(async (response) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return response;
});

export const mockApi = axios.create({
  baseURL: 'https://example.com',
});
