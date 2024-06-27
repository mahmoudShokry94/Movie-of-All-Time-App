import path from "path";
import fs from "fs";
import csv from "csv-parser";
import MovieModel from "../models/movies";

const importCSV = async () => {
  const filePath = path.join(__dirname, "./1000GreatestFilms.csv");

  const movies:any[] = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (row) => {
      console.log({ row });
      const movie = {
        title: row?.["Title"].split(",").length > 2 ?row?.["Title"]:row?.["Title"]?.split(",").reverse().join(" ").trim(),
        genre: row?.["Genre"].split("-"),
        year: parseInt(row?.["Year"], 10),
        colour: row?.["Colour"].split("-"),
        country: row?.["Country"]?.split("-"),
      };
      movies.push({
        updateOne: {
          filter: { title: movie.title ,year:movie.year},
          update: { $setOnInsert: movie },
          upsert: true,
        },
      });
    })
    .on('end', async () => {

        await MovieModel.bulkWrite(movies);

        console.log('CSV file successfully processed and data imported.');

      });;
};
export default importCSV;
