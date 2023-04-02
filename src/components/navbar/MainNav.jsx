import React, { useState } from "react";
import "./navbar.css";
import { FlipProvider, useFlip } from "react-easy-flip";
import { Link } from "react-router-dom";

const tabs = [
  {
    id: "/",
    text: "Trending",
  },
  {
    id: "movies",
    text: "Movies",
  },

  {
    id: "series",
    text: "Series",
  },
  {
    id: "search",
    text: "Search",
  },
];

export default function MainNav() {
  const [selectedTab, setSelectedTab] = useState("/");

  const selectedTabHandler = (id) => {
    setSelectedTab(id);
  };

  const flipRootId = "flipRoot";

  const animationOption = {
    duration: 500,
  };

  useFlip(flipRootId, animationOption);

  return (
    <FlipProvider>
      <div className="main" data-flip-root-id={flipRootId}>
        <div className="flex">
          {tabs?.map((item, index) => {
            return (
              <div
                onClick={() => selectedTabHandler(item.id)}
                className="flex-col"
                key={index}
              >
                <div className="nav-tag">
                  <Link to={item.id}>{item.text}</Link>
                </div> 
                {selectedTab === item.id ? (
                  <div className="active-tab" data-flip-id="highlight"></div>
                ) : (
                  <div className="non-active-tab" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </FlipProvider>
  );
}
