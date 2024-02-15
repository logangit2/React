import "./NewsApi.css";

import React from "react";

const NewsApi = ({ setCat, article }) => {
  return (
    <div className="news">
      <div className="topSection">
        <h1>NEWS</h1>
        <input
          type="text"
          placeholder="Search news"
          onChange={(e) => {
            e.target.value !== ""
              ? setCat(e.target.value)
              : setCat("web development");
          }}
        />
      </div>
      <div className="newsCatg">
        {article.length !== 0 ? (
          article.map((news, index) => {
            return (
              <div className="box" key={index}>
                <img src={news.urlToImage} alt="img" />
                <h3>{news.title}</h3>
                <a href={news.url} target="_blank">
                  Read news
                </a>
              </div>
            );
          })
        ) : (
          <h3>No news for serached text</h3>
        )}
      </div>
    </div>
  );
};

export default NewsApi;
