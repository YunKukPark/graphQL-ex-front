import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';

const GET_MOVIE = gql`
  query GetMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
      small_cover_image
    }
  }
`;

const Movie = () => {
  const { id: movieId } = useParams();
  const { data, loading, error } = useQuery(GET_MOVIE, {
    variables: { movieId },
  });

  console.log(data);
  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>Movie Detail {data.movie.title}</h1>
    </div>
  );
};

export default Movie;
