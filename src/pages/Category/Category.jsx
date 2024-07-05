import { useEffect, useState } from "react";
import style from "./Category.module.scss";
import { useMoviesContext } from "../../context/MoviesContext";
import MovieCard from "../../components/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import Button from "../../components/Button/Button";
import SearchBar from "../../components/SearchBar/SearchBar";

const Category = () => {
  const {
    movies,
    getMoviesByPageNumber,
    totalPages,
    getMoviesByMovieName,
    genres,
  } = useMoviesContext();
  const [pageNumber, setPageNumber] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  console.log(searchTerm);

  useEffect(() => {
    setPageNumber(1);
    if (!searchTerm) {
      getMoviesByPageNumber(pageNumber);
    } else {
      getMoviesByMovieName(searchTerm, pageNumber);
    }
  }, [pageNumber, searchTerm]);

  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1;
    setPageNumber(selectedPage);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      history.push(`/search?query=${searchTerm}`);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.genres}>
        {genres.map((genre) => (
          <Button key={genre.id} text={genre.name} />
        ))}
      </div>
      <div>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSubmit={handleSearchSubmit}
        />
      </div>
      <div className={style.moviesList}>
        {movies ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className={style.pagination}>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={style.breakMe}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={6}
          onPageChange={handlePageClick}
          containerClassName={style.pagination}
          subContainerClassName={`${style.pages} ${style.pagination}`}
          activeClassName={style.active}
        />
      </div>
    </div>
  );
};

export default Category;
