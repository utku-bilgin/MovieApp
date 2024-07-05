import style from "./MainSliderCard.module.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MainSliderCard = ({ movie }) => {
  const {
    title,
    overview,
    poster_path,
    release_date,
    vote_average,
    vote_count,
    id,
  } = movie;

  const formattedDate = new Date(release_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={style.container}>
      <Link key={id} to={`/detail/${id}`}>
        <img
          className={style.poster}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <div className={style.shadow}></div>
        <div className={style.content}>
          <h1 className={style.title}>{title}</h1>
          <div className={style.score}>
            <p className={style.rating}>
              Rating: {vote_average} ({vote_count} votes)
            </p>
            <p className={style.date}>{formattedDate}</p>
          </div>

          <p className={style.overview}>{overview}</p>
        </div>
      </Link>
    </div>
  );
};

MainSliderCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MainSliderCard;
