import React, { useState } from "react";
import "../trending/trending.scss";
import ContentWrapper from "../../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../../hooks/UseFetch";
import Carousel from "../../../../components/carousel/Carousel";
export default function Popular() {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/${endpoint}/popular`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <div className="carousel_selection">
      <ContentWrapper>
        <div className="title">What's Popular</div>
        <SwitchTabs onTabChange={onTabChange} data={["Movies", "Tv Shows"]} />
      </ContentWrapper>
      <Carousel endpoint={endpoint} data={data?.results} loading={loading} />
    </div>
  );
}
