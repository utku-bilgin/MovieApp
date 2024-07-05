import style from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.nav}>
        <Link to={`/`}>
          <img src="/logo.svg" alt="Logo" className={style.logo} />
        </Link>

        <div className={style.btnArea}>
          <Link to={`/`}>
            <h1>Home</h1>
          </Link>
          <Link to={`/movies`}>
            <h1>Movies</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
