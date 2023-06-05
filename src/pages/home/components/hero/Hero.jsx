import React, { useEffect, useState } from "react";
import "./hero.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../../hooks/UseFetch";
import { useSelector } from "react-redux";
import Img from "../../../../components/lazyLoadingImage/Img";
import ContentWrapper from "../../../../components/contentWrapper/ContentWrapper";
export default function Hero() {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.movix);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url?.backdrop +
      data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const handleSearch = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="hero">
      {!loading && (
        <div className="backdrop_img">
          <Img bg={background} />
        </div>
      )}
      <div className="opacity_layer"></div>
      <ContentWrapper>
        <div className="content">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of movies, TV show and people to discover. <br />
            Explore now.
          </span>
          <div className="search_input">
            <input
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={handleSearch}
              type="text"
              placeholder="Search for a movie or by tv show..."
            />
            <button
              onClick={() => {
                if (!query) return;
                navigate(`/search/${query}`);
              }}
            >
              Search
            </button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}
