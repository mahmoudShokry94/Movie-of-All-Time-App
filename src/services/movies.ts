import { NotFoundError } from "../Error/error";
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

export const getMovieById = async (id: string) => {
  console.log("Service...getMovieById...");

  const movie = await MovieRepository.getMovieById(id);

  if (!movie) {
    throw new NotFoundError("Movie not found");
  }

  return movie
};
