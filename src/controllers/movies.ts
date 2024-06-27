import type { Request, Response } from "express";
import * as MovieService from "../services/movies";

export const insertMovie = async (req: Request, res: Response) => {
  console.log("Controller...insertMovie...");

  await MovieService.insertMovie(req.body);

  res.status(201).json({
    message: "Movie has been inserted Succcessfully ",
  });
};

export const getMovies = async (req: Request, res: Response) => {
  console.log("Controller...getMovies...");

  const pageIndex = parseInt((req?.query["pageIndex"] as string) ?? "0");
  const pageSize = parseInt((req?.query["pageSize"] as string) ?? "5");
  const movieGenre = req?.query["genre"] as string;
  const movieName = req?.query["name"] as string;

  const respone = await MovieService.getMovies({
    pageIndex,
    pageSize,
    movieGenre,
    movieName,
  });

  res.status(200).json({
    message: "Movies are Listed Succcessfully ",
    data: respone,
  });
};

export const getMovieById = async (req: Request, res: Response) => {
  console.log("Controller...getMovieById...");

  const movieId = req.params.id;

  const respone = await MovieService.getMovieById(movieId);

  res.status(200).json({
    message: "Movie is Returned Succcessfully ",
    data: respone,
  });
};

export const updateMovie = async (req: Request, res: Response) => {
  console.log("Controller...updateMovie...");

  const movieId = req.params.id;

  const movie= await MovieService.updateMovie(movieId, req.body);

  res.status(200).json({
    message: "Movie has been updated Succcessfully ",
    data:movie
  });
};

export const deleteMovie = async (req: Request, res: Response) => {
  console.log("Controller...deleteMovie...");

  const movieId = req.params.id;

  await MovieService.deleteMovie(movieId);

  res.status(200).json({
    message: "Movie has been deleted Succcessfully ",
  });
};