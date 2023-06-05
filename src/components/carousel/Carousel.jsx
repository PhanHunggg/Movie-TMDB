import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import PosterFallback from "../../assets/no-poster.png";
import "./carousel.scss";
import Img from "../lazyLoadingImage/Img";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";

export default function Carousel({ data, loading, endpoint, title }) {
  const carouselContainer = useRef();

  const { url } = useSelector((state) => state.movix);

  const navigate = useNavigate();

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };

  const renderMovie = () => {
    return data?.map((ele) => {
      const posterUrl = ele.poster_path
        ? url.poster + ele.poster_path
        : PosterFallback;
      return (
        <div
          key={ele.id}
          className="carouselItem"
          onClick={() => navigate(`/${ele.media_type || endpoint}/${ele.id}`)}
        >
          <div className="posterBlock">
            <Img bg={posterUrl} />
            <CircleRating rating={ele.vote_average.toFixed(1)} />
            <Genres data={ele.genre_ids.slice(0, 2)} />
          </div>
          <div className="textBlock">
            <span className="title">{ele.title || ele.name}</span>
            <span className="date">
              {dayjs(ele.release_date).format("MMM DD, YYYY")}
            </span>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="carousel">
      <ContentWrapper>
        {title && <div className="carouselTitle">{title}</div>}
        <BsFillArrowLeftCircleFill
          onClick={() => navigation("left")}
          className="carouselLeftNav arrow"
        />
        <BsFillArrowRightCircleFill
          onClick={() => navigation("right")}
          className="carouselRighttNav arrow"
        />

        {!loading ? (
          <div ref={carouselContainer} className="carouselItems">
            {renderMovie()}
          </div>
        ) : (
          <div className="loadingSkeleton">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
}
