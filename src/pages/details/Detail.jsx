import React from "react";
import "./detail.scss";
import useFetch from "../../hooks/UseFetch";
import { useParams } from "react-router-dom";
import Banner from "./banner/Banner";
import Cast from "./cast/Cast";
import VideosSection from "./videoSection/VideoSection";
import Similar from "./carousel/Similar";
import Recommendation from "./carousel/Recommendation";
export default function Detail() {
  const { mediaType, id } = useParams();

  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);

  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  return (
    <div>
      <Banner video={data?.results[0]} crew={credits?.crew} />

      <Cast data={credits?.cast} loading={creditsLoading} />

      <VideosSection video={data} loading={loading} />

      <Similar mediaType={mediaType} id={id} />

      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
}
