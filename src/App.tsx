import React, { useEffect, useState } from "react";
import "./styles.css";

interface AppProps {
  message: string;
}

const MOVIE_API_URL = process.env.MOVIE_API_URL || "";
const MOVIE_ACCESS_TOKEN = process.env.MOVIE_ACCESS_TOKEN || "";

const App: React.FC<AppProps> = ({ message }) => {
  const [latestMovie, setLatestMovie] = useState<string | null>(null);

  useEffect(() => {
    const getLatest = async () => {
      try {
        const res = await fetch(`${MOVIE_API_URL}/movie/latest`, {
          headers: {
            Authorization: `Bearer ${MOVIE_ACCESS_TOKEN}`,
          },
        });
        const data: { original_title: string } = await res.json();
        setLatestMovie(data.original_title);
      } catch (error) {
        console.error("Error fetching latest movie:", error);
      }
    };

    getLatest();
  }, []);
  console.log("API_URL:", process.env.API_URL);
  console.log("NODE_ENV:", process.env.NODE_ENV);
  console.log("APP_PHASE:", process.env.APP_PHASE);
  return (
    <>
      <h1>{message}</h1>
      <div>{`Latest Movie : ${latestMovie}`}</div>
      <p>Hello, wolrd!</p>
    </>
  );
};

export default App;
