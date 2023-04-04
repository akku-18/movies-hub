import React, { useEffect } from "react";
import axios from "axios";
import "./genres.css";

function Chip({name, onClick}) {
  return (
    <div>
        <button className='single-chip' onClick={onClick}>{name}</button>
    </div>
  )
}

function Chip2({name, onClick}) {
  return (
    <div>
        <button className='second-chip' onClick={onClick}>{name}</button>
    </div>
    
  )
}

// No need for chip1 and chip2 components, buttons can also be used to display the genres.

export default function Genres({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
}) {

  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };


  useEffect(() => {
    fetchGenres();
    // return () => {
    //   setGenres({});
    // };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="genres">
        {selectedGenres &&
          selectedGenres.map((genre) => (
            <button className="second-chip" onClick={() => {handleRemove(genre)}} >{genre.name}</button>
            // <Chip2 key={genre.id} name={genre.name}  />
          ))}
        {genres &&
          genres.map((genre) => (
            <button className="single-chip" onClick={() => {handleAdd(genre)}} >{genre.name}</button>
            // <Chip
            //   key={genre.id}
            //   name={genre.name}
            //   onClick={() => {
            //     handleAdd(genre);
            //   }}
            // />
          ))}
          
      </div>
    </>
  );
}
