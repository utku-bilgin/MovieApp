import style from "./SearchBar.module.scss";
import PropTypes from "prop-types";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={style.container}>
      <input
        type="text"
        className={style.searchInput}
        placeholder="Search movie..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button type="submit" className={style.searchButton}>
        Search
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default SearchBar;
