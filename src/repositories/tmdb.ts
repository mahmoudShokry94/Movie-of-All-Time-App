import axios from "axios";

let moviesCahe = new Map();

export const getMovieInfo = async (movieName: string, year: number) => {
  console.log("Respoitory...getMovieInfo...");

  if (moviesCahe.get(`${movieName}-${year}`)) {
    console.log(`Get Movie with name ${movieName} and year ${year} from cache`);

    return moviesCahe.get(`${movieName}-${year}`);
  }

  console.log(`Get Movie with name ${movieName} and year ${year} by Calling Third party`);

  try {
    const { data } = await axios.request({
      method: "get",
      url: `${
        process.env?.["TMDB_BASE_URL"]
      }3/search/movie?query=${movieName.replaceAll(
        " ",
        "+"
      )}&Year=${year}&api_key=${process.env?.["TMDB_API_KEY"]}`,
      headers: {
        accept: "application/json",
      },
    });

    const result = data?.results?.[0]

    moviesCahe.set(`${movieName}-${year}`,result);
    
    return result
  } catch (e) {
    console.log(e);
    return {};
  }
};
