import React from "react";
import "./styles.css";

interface AppProps {
  message: string;
}

const App: React.FC<AppProps> = ({ message }) => {
  console.log("API_URL:", process.env.API_URL);
  console.log("NODE_ENV:", process.env.NODE_ENV);
  console.log("APP_PHASE:", process.env.APP_PHASE);
  return <h1>{message}</h1>;
};

export default App;
