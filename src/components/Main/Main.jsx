import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../../Request";

const Main = () => {
  const [movies, setMovies] = useState([]);
  // RANDOM MOVIE EACH TIME WE LOAD THE PAGE
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  //console.log("Movies", movie);
  const trunCatString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <div className="w-full h-[500px] text-white overflow-hidden z-10">
      <div className="w-full h-full overflow-hidden">
        <div className="w-full  h-[500px] absolute bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[30%] p-4 md:p-8">
          <h1 className="text-3xl mp:text-8xl text-white font-bold">
            {movie?.title}
          </h1>
          <div className="my-4">
            <button className="cursor-pointer border border-gray-300 bg-gray-100 text-black py-2 px-5">
              Play
            </button>
            <button className="cursor-pointer border border-gray-300 text-white py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-x-[50%] xl:max-x-[35%] text-gray-200">
            {trunCatString(movie?.overview, 210)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
