import type { Request, Response } from "express";

export const getMovies = async (req: Request, res: Response) => {
  console.log("Controller...getMovies...");


  res.status(200).json({
    message: "Movies are Listed Succcessfully ",
    data: {},
  });
};
