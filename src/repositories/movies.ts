import MovieModel from "../models/movies";
import Movie from "../types/Movie";
import { mongoInputSanitize } from "../utils/mongo-utils";

export const getMovies = async ({
  filters = {},
  pagination,
}: {
  filters: Record<string, string>;
  pagination: {
    pageIndex: number;
    pageSize: number;
  };
}) => {
  console.log("Respository...getMovies...");
  let mappedFilters: any = {};

  if (filters.movieGenre) {
    mappedFilters.genre = { $in: [filters.movieGenre] };
  }

  if (filters.movieName) {
    mappedFilters.title = {
      $regex: new RegExp(mongoInputSanitize(filters.movieName), "i"),
    };
  }

  const aggregationResult = (
    await MovieModel.aggregate([
      { $match: mappedFilters },
      {
        $facet: {
          results: [
            {
              $skip: pagination.pageIndex * pagination.pageSize,
            },
            {
              $limit: pagination.pageSize,
            },
            {
              $project: {
                _id: 0,
                id: "$movieId",
                title: 1,
                country: 1,
                year: 1,
                colour: 1,
                genre: 1,
                favorited: 1,
                additionalDetails: 1,
              },
            },
          ],
          totalCount: [{ $count: "count" }],
        },
      },
      {
        $project: {
          results: 1,
          resultReport: {
            pageSize: { $size: "$results" },
            totalCount: {
              $arrayElemAt: ["$totalCount.count", 0],
            },
          },
        },
      },
    ])
  )?.[0] ?? {
    results: [],
    resultReport: {
      pageSize: pagination?.pageSize,
      totalCount: 0,
    },
  };
  aggregationResult.resultReport.pageIndex = pagination?.pageIndex;

  return aggregationResult;
};

export const insertMovie = async (payload: Pick<Movie, "title" | "country" | "year" | "colour">) => {
  console.log("Respository...insertMovie...");

  return MovieModel.create(payload);
};

