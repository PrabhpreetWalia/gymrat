import React from "react";
import "./News.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { useState, useEffect } from "react";
import { Link, generatePath, useParams } from "react-router-dom";

function News({ margin = "10vh 0 0 0", count = -1 }) {
  window.scrollTo({ top: 0, behavior: "smooth" });

  const [news, setNews] = useState([]);
  const [pagination, setPagination] = useState();

  const { page } = useParams();

  let API_URL = "https://gymrat-api-five.vercel.app";

  useEffect(() => {
    try {
      if (count !== -1) return;

      fetch(`${API_URL}/count-news`)
        .then((res) => res.json())
        .then((data) => {
          const pageCount = data.pageCount;
          let paginationHTML = [];

          for (let i = 1; i <= pageCount; i++) {
            paginationHTML.push(
              <Link key={i} to={generatePath("/blog/:page", { page: i })}>
                <button
                  className="pagination--button"
                  disabled={page === String(i)}
                >
                  {i}
                </button>
              </Link>
            );
          }
          setPagination(paginationHTML);
        });
    } catch (e) {
      console.log(e);
    }
  }, [page, API_URL, count]);

  useEffect(()=> {

    try {

      if (count !== -1){

        fetch(`${API_URL}/news?num=${count}`)
          .then(data => data.json())
          .then((data) => {
            setNews(data)
          })

      }
      else{
        fetch(`${API_URL}/news?num=${count}&page=${page}`)
        .then((data) => data.json())
        .then((data) => {
          setNews(data);
        });
      }

    } catch (e) {
      console.log(e);
    }
  }, [API_URL, count, page]);

  function newsPropogate() {
    return news.map((item, index) => {
      return (
        <div key={index} className="news">
          <div className="news--date">{item.date}</div>
          <h1>{item.headline}</h1>
          <h2>{item.content}</h2>
          <PrimaryButton value="Read More" isBlack={true} href="/blog/1" />
        </div>
      );
    });
  }

  function skeletonLoading() {

    const skeleltonItem = []

    for(var i=0; i< 6; i++){
      skeleltonItem.push(
        <div key={i} className="news--skeleton">
          <div className="news--skeleton-bar"></div>
          <div className="news--skeleton-bar"></div>
          <div className="news--skeleton-bar"></div>
          <div className="news--skeleton-bar"></div>
        </div>
      )
    }

          
          return ( <>{skeleltonItem}</> );
  }

  return (
    <>
      <div className="news--heading" style={{ margin: margin }}>
        <span className="main--heading">LATEST NEWS</span>
      </div>
      <div className="news--container">
        {news.length === 0 ? skeletonLoading() : newsPropogate()}
      </div>
      <div className="pagination--container">{pagination}</div>
    </>
  );
}

export default News;
