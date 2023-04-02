import React from "react";
import "./singleContent.css";
import { img_300, unavailable } from "../../config/config";

export default function SingleContent({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) {
  
  return (
    <div className="media">
      {vote_average > 7 ? (
        <span className="vote" style={{ background: "blue" }}>
          {Math.round(vote_average * 10) / 10}
        </span>
      ) : (
        <span className="vote" style={{ background: "red" }}>
          {Math.round(vote_average * 10) / 10}
        </span>
      )}

      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="sub-title">{date}</span>
      </span>
    </div>
  );
}
