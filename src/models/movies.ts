import mongoose from "mongoose";
import { getMoviesDb } from "../adapters/mongodb-manager";
import * as uuid from "uuid";

const movieSchema = new mongoose.Schema(
  {
    movieId: {
      type: String,
      unique: true,
      required: true,
      index: true,
      default: uuid.v7,
    },
    title: {
      type: String,
      required: true,
      index: true,
    },
    genre: {
      type: [String],
      required: true,
      index: true,
    },
    country: {
      type: [String],
      required: true,
    },
    colour: {
      type: [String],
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    isFavourite: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    additionalDetails: {
      overview: {
        type: String,
      },
      popularity: {
        type: String,
      },
      adult: {
        type: Boolean,
      },
    },
  },
  { timestamps: true }
);

const connection = getMoviesDb();

export default connection.model("Movie", movieSchema);
