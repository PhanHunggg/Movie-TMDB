import React from "react";
import "./home.scss";
import Hero from "./components/hero/Hero";
import Trending from "./components/trending/Trending";
import Popular from "./components/popular/Popular";
import TopRated from "./components/topRated/TopRated";

export default function Home() {
  return (
    <div className="home_page">
      <Hero />
      <Trending />
      <Popular />
      <TopRated />
      
    </div>
  );
}
