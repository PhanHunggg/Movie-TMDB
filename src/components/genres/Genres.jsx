import React from "react";
import "./genres.scss";
import { useSelector } from "react-redux";
export default function Genres({ data }) {
  const { genres } = useSelector((state) => state.movix);
  return (
    <div className="genres">
      {data?.map((ele) => {
        if (!genres[ele]?.name) return;
        return (
          <div key={ele} className="genre">
            {genres[ele]?.name}
          </div>
        );
      })}
    </div>
  );
}
