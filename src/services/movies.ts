import { NotFoundError, ValidationError } from "../Error/error";
import * as MovieRepository from "../repositories/movies";
import { getMovieInfo } from "../repositories/tmdb";
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

export const updateMovie = async (
  id: string,
  payload: Pick<Movie, "title" | "country" | "year" | "colour">
) => {
  console.log("Service...updateMovie...");

  const movie = await MovieRepository.getMovieById(id);

  if (!movie) {
    throw new NotFoundError("Movie not found");
  }

  return MovieRepository.updateMovie(id, payload);
};

export const deleteMovie = async (id: string) => {
  console.log("Service...deleteMovie...");

  const movie = await MovieRepository.getMovieById(id);

  if (!movie) {
    throw new NotFoundError("Movie not found");
  }

  return MovieRepository.deleteMovie(id);
};

export const addMovieToFavourites = async (movieId: string) => {
  console.log("Service...addMovieToFavourites...");

  const movieInfo = await MovieRepository.getMovieById(movieId);

  if (!movieInfo) {
    throw new NotFoundError(`Movie with ID ${movieId} not found`);
  }

  if (movieInfo?.isFavourite) {
    throw new ValidationError(`Movie with ID ${movieId} is already added to favourites`);
  }
  const { adult, overview, popularity } = await getMovieInfo(
    movieInfo.title,
    movieInfo.year
  );


  return await MovieRepository.updateMovie(movieId, {
    isFavourite: true,
    additionalDetails: { adult, overview, popularity },
  });

};