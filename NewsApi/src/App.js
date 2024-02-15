import { useEffect, useState } from "react";
import "./App.css";
import NewsApi from "./NewsApi";

function App() {
  let [articles, setArticles] = useState([]);
  let [cat, setCat] = useState("web development");
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${cat}&from=2024-02-02&sortBy=publishedAt&apiKey=84c4656642d14d06a6d5fbb74c9315b8`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.articles);
        setArticles(data.articles);
      });
  }, [cat]);
  return (
    <div className="App">
      <NewsApi article={articles} cat={cat} setCat={setCat} />
    </div>
  );
}

export default App;
