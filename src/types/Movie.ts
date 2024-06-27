export default interface Movie {
  movieId: string;
  year: number;
  title: string;
  director: string;
  additionalDetails: {
    overview: string;
    popularity: string;
    adult: boolean;
  };
  colour: string[];
  country: string[];
  genre: string[];
  isFavourite: boolean;
  createdAt: string;
  updatedAt: string;
}
