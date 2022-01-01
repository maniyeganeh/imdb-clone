import { useEffect, useState } from "react";
import LoaderComponent from "../components/shared/loader/LoaderComponent";
import MoviesList from "../components/ui/movies/MoviesList";
import { getMovies } from "../helpers/api-util";



export default function Home(props) {

  const { movies } = props;
  if (movies.length === 0 || movies === undefined) {
    return (
      <LoaderComponent />
    )
  }
  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  )
}
export const getStaticProps = async () => {
  const movies = await getMovies()
  return {
    props: {
      movies
    }
  }
}