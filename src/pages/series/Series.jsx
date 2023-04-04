import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "../../components/singleContent/SingleContent";
import Pagination from "../../components/pagination/Pagination";
import "./series.css";
import Genres from "../../components/genres/Genres";
import useGenre from "../../hooks/useGenres";


export default function Series() {

  const [content, setContent] = useState([]);
  const [currPage, setcurrPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);

  const genreforURL = useGenre(selectedGenres);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${genreforURL}`
    );

    setContent(data.results);
  };

  useEffect(() => {
    fetchMovies(); // eslint-disable-next-line
  }, [genreforURL]);

  const lastPostIndex = currPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = content.slice(firstPostIndex, lastPostIndex);


  return (
    <div>
      <span className="page-title">TV Series</span>
      <Genres
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
      />
      <span className="current-page">{currPage}.</span>
      <div className="series">
        {content &&
          currentPosts?.map((c) => {
            return (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type="tv"
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
