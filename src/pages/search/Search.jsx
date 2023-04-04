import React from "react";
import "./search.css";
import Tabs from "../../components/tabs/Tabs";

export default function Search() {
  return (
    <>
      <div className="search-bar">
        <input type="text" placeholder="Search" className="searchBox" />
        <button className="button-71">Enter</button>
      </div>
      <Tabs />
    </>
  );
}
