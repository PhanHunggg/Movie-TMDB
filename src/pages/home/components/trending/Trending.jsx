import React, { useState } from "react";
import "./trending.scss";
import ContentWrapper from "../../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../../hooks/UseFetch";
import Carousel from "../../../../components/carousel/Carousel";
export default function Trending() {
  const [endpoint, setEndpoint] = useState("day");

  const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  return (
    <div className="carousel_selection">
      <ContentWrapper>
        <div className="title">Trending</div>
        <SwitchTabs onTabChange={onTabChange} data={["Day", "Week"]} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
}
