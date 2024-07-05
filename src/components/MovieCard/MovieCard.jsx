import style from "./MovieCard.module.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { title, poster_path, id } = movie;

  return (
    <div className={style.container}>
      <Link key={id} to={`/detail/${id}`}>
        <img
          className={style.poster}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
      </Link>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
