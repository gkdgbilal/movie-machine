import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

function PopularMovie() {
  const { movies, loading } = useSelector((state) => state.movie);

  return (
    <div className="bg-gray-800 container max-w-7xl mx-auto pb-10 px-4">
      <h1 className="text-white text-2xl mt-8 mb-5">
        Upcoming Movies
      </h1>
      {
        !loading &&
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {movies.results?.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      }
    </div>
  );
}

export default PopularMovie;
