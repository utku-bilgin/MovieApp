import style from "./Detail.module.scss";
import { useParams } from "react-router-dom";
import { useMoviesContext } from "../../context/MoviesContext";
import { useEffect } from "react";

const Detail = () => {
  const { movieId } = useParams();
  const { getMovieDetailById, movieDetail } = useMoviesContext();
  // const {
  //   title,
  //   poster_path,
  //   origin_country,
  //   original_language,
  //   overview,
  //   genres,
  //   release_date,
  //   runtime,
  //   tagline,
  //   vote_average,
  //   vote_count,
  //   budget,
  //   revenue,
  //   production_companies,
  //   popularity,
  //   backdrop_path,
  // } = movieDetail;

  useEffect(() => {
    getMovieDetailById(movieId);
  }, [movieId]);

  if (!movieDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.container}>
      <img
        className={style.backdrop}
        src={`https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`}
        alt={movieDetail.title}
      />
      <div className={style.grid}>
        <h1 className={style.title}>{movieDetail.title}</h1>
        <h4>Tagline: {movieDetail.tagline}</h4>
        <div className={style.info}>
          <p>Country: {movieDetail.origin_country.join(", ")}</p>
          <p>Language: {movieDetail.original_language}</p>
          <p>
            Genres: {movieDetail.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p>Release Date: {movieDetail.release_date}</p>
          <p>Runtime: {movieDetail.runtime} minutes</p>
          <p>
            Rating: {movieDetail.vote_average} ({movieDetail.vote_count} votes)
          </p>
          <p>Runtime: {movieDetail.runtime} minutes</p>
          <p>Popularity: {movieDetail.popularity}</p>
          <p>Budget: ${movieDetail.budget.toLocaleString()}</p>
          <p>Revenue: ${movieDetail.revenue.toLocaleString()}</p>
          <p>
            Average: {movieDetail.vote_average} - Count:{" "}
            {movieDetail.vote_count}{" "}
          </p>
          <p>
            Production Companies:{" "}
            {movieDetail.production_companies
              .map((company) => company.name)
              .join(", ")}
          </p>
          <p className={style.overview}>{movieDetail.overview}</p>
        </div>
      </div>
      <div className={style.grid}>
        <img
          className={style.poster}
          src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
          alt={movieDetail.title}
        />
      </div>
    </div>
  );
};

export default Detail;
