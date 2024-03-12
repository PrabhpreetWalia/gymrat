import React from "react";
import "./News.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { useState, useEffect } from "react";

function News({ margin = "10vh 0 0 0", count}) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    try {
      fetch(count?`/news?num=${count}`: '/news')
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          setNews(data);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <div className="news--heading" style={{ margin: margin }}>
        <span className="main--heading">LATEST NEWS</span>
      </div>
      <div className="news--container">
        {news.map((item, index) => {
          return (
            <div className="news" key={index}>
              <div className="news--date">{item.date}</div>
              <h1>{item.headline}</h1>
              <h2>{item.content}</h2>
              <PrimaryButton value="Read More" isBlack={true} href="/blog"/>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default News;
