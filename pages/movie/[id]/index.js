import axios from 'axios';
import React from 'react';
import { server } from '../../../config';
import Image from 'next/image';
import Meta from '../../../components/Meta';
import SimilarMovies from '../../../components/SimilarMovies';

function Movie({ movie, similarMovies }) {
  return (
    <div className="container max-w-4xl mx-auto pt-6">
      <Meta title={movie.title} />
      <div className="px-3">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          width={1000}
          height={600}
          alt=""
          className="rounded-md"
        />
        <h1 className="font-bold text-xl my-2">{movie.title}</h1>
        <p className="text-gray-600 text-sm mt-4">{movie.overview}</p>
        <p className="mt-5 text-gray-600 text-sm">
          Genres:{' '}
          <span className="font-bold">
            {movie.genres.map(genre => genre.name).join(', ')}
          </span>
        </p>
        <p className="text-gray-600 text-sm">
          Release Date: <span className="font-bold">{movie.release_date}</span>
        </p>
      </div>
      <div className="bg-gray-800">
        <SimilarMovies similarMovies={similarMovies} />
      </div>
    </div>
  );
}

// export async function getStaticProps(context) {
//   const { id } = context.params;
//   const res = await axios(
//     `${server}/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`
//   );
//   const movie = res.data;
//   const similar = await axios(
//     `${server}/movie/${id}/similar?api_key=${process.env.API_KEY}&language=en-US&page=1`
//   );
//   const similarMovies = similar.data;
//   return {
//     props: {
//       movie,
//       similarMovies
//     }
//   };
// }

// export async function getStaticPaths(ctx) {
//   const { query } = ctx;
//   console.log('query', query);

//   const res = await axios(
//     // `${server}/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
//     `${server}/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1&region=TR`
//   );
//   const movies = res.data.results;
//   const paths = movies.map(movie => ({ params: { id: movie.id.toString() } }));
//   return {
//     paths,
//     fallback: false
//   };
// }

Movie.getInitialProps = async function (context) {
  const { query } = context;
  const res = await axios(
    `${server}/movie/${query.id}?api_key=1ffe5453fccfb8abb96f4019a94cf663&language=en-US&page=1`
  );
  const movie = res.data;
  const similar = await axios(
    `${server}/movie/${query.id}/similar?api_key=1ffe5453fccfb8abb96f4019a94cf663&language=en-US&page=1`
  );
  const similarMovies = similar.data;
  return {
    movie,
    similarMovies
  };
};

export default Movie;
