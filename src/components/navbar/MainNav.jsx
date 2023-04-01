import React, { useState } from "react";
import "../navbar/navbar.css";

const tabs = [
  {
    id: "trending",
    text: "Trending",
  },
  {
    id: "movies",
    text: "Movies",
  },

  {
    id: "tv series",
    text: "TV series",
  },
  {
    id: "search",
    text: "Search",
  },
];

let selected = true;

export default function MainNav() {
  const [selectedTab, setSelectedTab] = useState("trending");

  const selectedTabHandler = (id) => {
    setSelectedTab(id);
  };

  return (
    <div className="main">
      <div className="flex">
        {tabs?.map((item, index) => {
          return (
            <div
              onClick={() => selectedTabHandler(item.id)}
              className="flex-col"
              key={index}
            >
              {item.text}

              {selectedTab === item.id ? (
                <div className="active-tab" />
              ) : (
                <div className="non-active-tab" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
