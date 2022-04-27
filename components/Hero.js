import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FiSearch from 'react-icons/fi';
function Hero({
  handleSearchInputChanges,
  callSearchFunction,
  searchValue,
  latestSearchValue,
  setSearchValue
}) {
  return (
    <div className="text-center bg-white pb-10">
      <div className="w-60 mx-auto">
        <Image
          src={'/img/home_cinema.png'}
          width={200}
          height={200}
          layout="responsive"
          alt="Cinema"
        />
      </div>
      <h1 className="text-2xl text-gray-700 uppercase font-bold">
        Welcome to Movie Machine
      </h1>
      <div className="relative mr-6 my-2">
        <input
          id="default"
          type="text"
          name="default"
          placeholder="Search"
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
          value={searchValue}
          onChange={e => handleSearchInputChanges(e.target.value)}
        />
        <button
          onClick={callSearchFunction}
          className="bg-gray-700 text-white py-3 px-6 rounded-lg text-sm mt-4 ml-2 h-[40px]"
        >
          Search
        </button>
        <div className="flex flex-row justify-center mt-2 mb-[-30px]">
          <span className="text-md font-bold text-gray-700">
            {latestSearchValue.length > 0 && 'Latest Searches:'}
          </span>
          {latestSearchValue.map(value => (
            <p
              key={value.id}
              onClick={e => handleSearchInputChanges(e.target.innerText)}
              className="block ml-2 font-medium text-md text-gray-600 hover:text-gray-900 underline cursor-pointer"
            >
              {value.value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
