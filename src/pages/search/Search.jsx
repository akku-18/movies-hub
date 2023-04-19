import React from "react";
import "./search.css";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "../../components/singleContent/SingleContent";
import Pagination from "../../components/pagination/Pagination";

export default function Search() {
  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  const [currPage, setcurrPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6); 

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&query=${searchText}&include_adult=false` 
      );
      setContent(data.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    setType(1)
    // eslint-disable-next-line
  }, [type]);


  const lastPostIndex = currPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = content.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <div className="search-bar">
        <input type="text" placeholder="Search" className="searchBox" onBlur={(e) => setSearchText(e.target.value)}  />
        <button className="button-71" onClick={fetchSearch}>Enter</button>
      </div>

      <div className="search">
        {content &&
          currentPosts?.map((c) => {
            return (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type={c.media_type}
                vote_average={c.vote_average}
              />
            );
          })}
          {searchText && content.length === 0 && ( <h2>No Movies Found</h2>) }
      </div>
      <Pagination
        totalPosts={content.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setcurrPage}
        currPage={currPage}
        setPostsPerPage={setPostsPerPage}
      />

    </>
  );
}
