import * as MovieRepository from "../repositories/movies";
import Movie from "../types/Movie";

export const getMovies = async ({
  pageIndex,
  pageSize,
  movieGenre,
  movieName,
}: {
  pageIndex: number;
  pageSize: number;
  movieGenre: string;
  movieName: string;
}) => {
  console.log("Service...getMovies...");

  return MovieRepository.getMovies({
    filters: { movieGenre, movieName },
    pagination: { pageIndex, pageSize },
  });
};

export const insertMovie = async (
  payload: Pick<Movie, "title" | "country" | "year" | "colour">
) => {
  console.log("Service...insertMovie...");

  return MovieRepository.insertMovie(payload);
};
