import React, { useState } from "react";

import "./videoSection.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import Img from "../../../components/lazyLoadingImage/Img";
import { PlayBtn } from "../playBtn/PlayBtn";

const VideosSection = ({ video, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  const renderVideo = () => {
    return video?.results?.map((ele) => {
      return (
        <div
          key={ele.id}
          className="videoItem"
          onClick={() => {
            setShow(true);
            setVideoId(ele.key);
          }}
        >
          <div className="videoThumbnail">
            <Img bg={`https://img.youtube.com/vi/${ele.key}/mqdefault.jpg`} />
            <PlayBtn />
          </div>
          <div className="videoTitle">{ele.name}</div>
        </div>
      );
    });
  };

  return (
    <>
      {video?.results?.length > 0 && (
        <div className="videosSection">
          <ContentWrapper>
            <div className="sectionHeading">Official Videos</div>
            {!loading ? (
              <div className="videos">{renderVideo()}</div>
            ) : (
              <div className="videoSkeleton">
                {loadingSkeleton()}
                {loadingSkeleton()}
                {loadingSkeleton()}
                {loadingSkeleton()}
              </div>
            )}
          </ContentWrapper>
          <VideoPopup
            show={show}
            setShow={setShow}
            videoId={videoId}
            setVideoId={setVideoId}
          />
        </div>
      )}
    </>
  );
};

export default VideosSection;
