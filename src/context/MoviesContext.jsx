import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const BASE_TOKEN = import.meta.env.VITE_API_TMDB_TOKEN;
const BASE_URL = import.meta.env.VITE_API_TMDB_URL;
const MOVIE_URL = `${BASE_URL}3/movie/`;
const MOVIE_URL_SEARCH = `${BASE_URL}3/search/`;
const MOVIE_URL_GENRE = `${BASE_URL}3/genre/`;

const MoviesContext = createContext();

export const useMoviesContext = () => {
  return useContext(MoviesContext);
};

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState();
  const [totalPages, setTotalPages] = useState();
  const [nowPlayingMovies, setNowPlayingMovies] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [topRateMovies, setTopRateMovies] = useState();
  const [upcomingMovies, setUpcomingMovies] = useState();
  const [movieDetail, setMovieDetail] = useState();
  const [genres, setGenres] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: BASE_TOKEN,
          },
        };

        const responseNowPlaying = await axios(
          `${MOVIE_URL}upcoming?language=en-US&page=1`,
          options
        );
        setNowPlayingMovies(responseNowPlaying.data.results);

        const responsePopuler = await axios(
          `${MOVIE_URL}popular?language=en-US&page=1`,
          options
        );
        setPopularMovies(responsePopuler.data.results);

        const responseTopRate = await axios(
          `${MOVIE_URL}top_rated?language=en-US&page=1`,
          options
        );
        setTopRateMovies(responseTopRate.data.results);

        const responseUpcoming = await axios(
          `${MOVIE_URL}upcoming?language=en-US&page=1`,
          options
        );
        setUpcomingMovies(responseUpcoming.data.results);

        const responseGenres = await axios(
          `${MOVIE_URL_GENRE}movie/list?language=en`,
          options
        );
        setGenres(responseGenres.data.genres);
        console.log(genres);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const getMovieDetailById = async (movieId) => {
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: BASE_TOKEN,
        },
      };

      const responseMovieDetail = await axios.get(
        `${MOVIE_URL}${movieId}?language=en-US`,
        options
      );

      setMovieDetail(responseMovieDetail.data);
    } catch (error) {
      console.error("Film detayını getirirken hata oluştu:", error);
    }
  };

  const getMoviesByPageNumber = async (pageNumber) => {
    console.log(pageNumber);
    try {
      if (!pageNumber || isNaN(pageNumber)) {
        pageNumber = 1;
      }

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: BASE_TOKEN,
        },
      };

      const responseMovies = await axios.get(
        `${MOVIE_URL}popular?language=en-US&page=${pageNumber}`,
        options
      );

      setMovies(responseMovies.data.results);
      setTotalPages(responseMovies.data.total_pages);
    } catch (error) {
      console.error("Filmleri getirirken hata oluştu:", error);
    }
  };

  const getMoviesByMovieName = async (searchTerm, pageNumber) => {
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: BASE_TOKEN,
        },
      };

      const responseMovies = await axios.get(
        `${MOVIE_URL_SEARCH}movie?query=${searchTerm}&include_adult=false&language=en-US&page=${pageNumber}`,
        options
      );

      setMovies(responseMovies.data.results);
      setTotalPages(responseMovies.data.total_pages);
    } catch (error) {
      console.error("Filmleri getirirken hata oluştu:", error);
    }
  };

  return (
    <MoviesContext.Provider
      value={{
        movies,
        nowPlayingMovies,
        popularMovies,
        topRateMovies,
        upcomingMovies,
        getMovieDetailById,
        movieDetail,
        getMoviesByPageNumber,
        totalPages,
        getMoviesByMovieName,
        genres,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

MoviesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MoviesContext;
