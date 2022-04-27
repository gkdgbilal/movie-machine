import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from '../components/Hero';
import PopularMovie from '../components/PopularMovie';
import { server } from '../config';
import SearchedMovies from '../components/SearchedMovies';

export default function Home({ movies, allData }) {
  const [searchValue, setSearchValue] = useState('');
  const [storedValues, setStoredValues] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [latestSearchValue, setLatestSearchValue] = useState([]);
  const handleSearchInputChanges = e => {
    setSearchValue(e);
  };

  const resetInputField = () => {
    setSearchValue('');
  };
  const callSearchFunction = e => {
    e.preventDefault();
    setStoredValues([
      ...storedValues,
      { id: storedValues.length + 1, value: searchValue }
    ]);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=1ffe5453fccfb8abb96f4019a94cf663&language=en-US&query=${searchValue}&page=1&include_adult=false`
      )
      .then(res => {
        setSearchResults(res.data);
        resetInputField();
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    if (storedValues) {
      localStorage.setItem('searchValue', JSON.stringify(storedValues || []));
    }
    setLatestSearchValue(
      JSON.parse(localStorage.getItem('searchValue')).slice(-5)
    );
  }, [storedValues]);
  return (
    <div className="bg-gray-800">
      <Hero
        handleSearchInputChanges={handleSearchInputChanges}
        callSearchFunction={callSearchFunction}
        searchValue={searchValue}
        latestSearchValue={latestSearchValue}
        setSearchValue={setSearchValue}
      />
      {searchResults.results ? (
        <SearchedMovies searchResults={searchResults} />
      ) : (
        <PopularMovie movies={movies} />
      )}
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios(
    `${server}/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1&region=TR`
  );
  const allMovies = await axios(
    'https://api.themoviedb.org/3/movie/popular?api_key=1ffe5453fccfb8abb96f4019a94cf663&language=en-US&page=1'
  );
  const allData = allMovies.data;
  const movies = res.data;
  return {
    props: {
      movies,
      allData
    }
  };
}
