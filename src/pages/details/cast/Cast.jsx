import React from "react";
import { useSelector } from "react-redux";

import "./cast.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

import avatar from "../../../assets/avatar.png";
import Img from "../../../components/lazyLoadingImage/Img";

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.movix);

  const renderCast = () => {
    return data?.map((ele) => {
      let imgUrl = ele.profile_path ? url.profile + ele.profile_path : avatar;
      return (
        <div key={ele.id} className="listItem">
          <div className="profileImg">
            <Img bg={imgUrl} />
          </div>
          <div className="name">{ele.name}</div>
          <div className="character">{ele.character}</div>
        </div>
      );
    });
  };

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return (
    <div className="castSection">
      <ContentWrapper>
        <div className="sectionHeading">Top Cast</div>
        {!loading ? (
          <div className="listItems">{renderCast()}</div>
        ) : (
          <div className="castSkeleton">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Cast;
