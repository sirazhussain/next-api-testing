import React from "react";
import MovieList from "@/app/components/MovieList";
const Movie = React.memo(function Movie() {
  return (
    <>
      <MovieList/>
    </>
  );
});

export default Movie;
