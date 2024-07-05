import style from "./Home.module.scss";
import { useMoviesContext } from "../../context/MoviesContext";
import MovieCard from "../../components/MovieCard/MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSliderCard from "../../components/MainSliderCard/MainSliderCard";

const Home = () => {
  const { nowPlayingMovies, popularMovies, topRateMovies, upcomingMovies } =
    useMoviesContext();

  const mainSliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
  };

  const categorySliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 6, // gösterilecek slayt sayısı
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={style.container}>
      <div>
        <Slider {...mainSliderSettings}>
          {nowPlayingMovies ? (
            nowPlayingMovies.map((movie) => (
              <MainSliderCard key={movie.id} movie={movie} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </Slider>
      </div>
      <div className={style.sliderArea}>
        <h1 className={style.sliderHeader}>Popular Movies</h1>
        <Slider {...categorySliderSettings}>
          {popularMovies ? (
            popularMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </Slider>
      </div>
      <div className={style.sliderArea}>
        <h1 className={style.sliderHeader}>Top Rated Movies</h1>
        <Slider {...categorySliderSettings}>
          {topRateMovies ? (
            topRateMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </Slider>
      </div>
      <div className={style.sliderArea}>
        <h1 className={style.sliderHeader}>Upcoming Movies</h1>
        <Slider {...categorySliderSettings}>
          {upcomingMovies ? (
            upcomingMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
