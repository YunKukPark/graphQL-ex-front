import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';

const GET_MOVIES = gql`
  query GetMovies {
    allMovies {
      title
      id
    }
  }
`;

const Movies = () => {
  const { data, loading, error } = useQuery(GET_MOVIES);
  console.log(data, loading);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Could not fetch :(</h1>;
  return (
    <ul>
      {data.allMovies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Movies;
