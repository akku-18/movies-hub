import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "../../components/singleContent/SingleContent";
import "./trending.css";
import "react-loading-skeleton/dist/skeleton.css";
import Pagination from "../../components/pagination/Pagination";
import Skeleton from "../../components/skeleton/Skeleton";

export default function Trending() {
  const [loading, setLoading] = useState(true)
  const [content, setContent] = useState([]);
  const [currPage, setcurrPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6); 

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`
    );

    setContent(data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchTrending(); // eslint-disable-next-line
  }, []);

  const lastPostIndex = currPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = content.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <span className="page-title">Trending</span>
      <span className="current-page">{currPage}.</span>
      <div className="trending">
        {loading && <Skeleton cards={6} />  }
        
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
      </div>
      <Pagination
        totalPosts={content.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setcurrPage}
        currPage={currPage}
        setPostsPerPage={setPostsPerPage}
      />
    </div>
  );
}
