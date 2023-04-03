import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "../../components/singleContent/SingleContent";
import Pagination from "../../components/pagination/Pagination";
import "./movies.css";

export default function Movies() {

  const [content, setContent] = useState([]);
  const [currPage, setcurrPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6); 

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`
    );

    setContent(data.results)
  };

  useEffect(() => {
    fetchMovies(); // eslint-disable-next-line
  }, []);

  const lastPostIndex = currPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = content.slice(firstPostIndex, lastPostIndex);


  return (
    <div>
      <span className="page-title">Movies</span>
      <span className="current-page">{currPage}.</span>
      <div className="movies">
        {content &&
          currentPosts?.map((c) => {
            return (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type="movies"
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
