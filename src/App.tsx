import React from "react";
import "./styles.css";

interface AppProps {
  message: string;
}

const App: React.FC<AppProps> = ({ message }) => {
  return <h1>{message}</h1>;
};

export default App;
