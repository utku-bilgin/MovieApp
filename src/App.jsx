import { Routes, Route } from "react-router";
import style from "./App.module.scss";
import UserRoutes from "./routes/UserRoutes";
import { MoviesProvider } from "./context/MoviesContext";
import Header from "./layout/Header/Header";

function App() {
  return (
    <div className={style.container}>
      <MoviesProvider>
        <Header />
        <div className={style.main}>
          <Routes>
            <Route path="/*" element={<UserRoutes />} />
            <Route path="user/*" element={<UserRoutes />} />
          </Routes>
        </div>
      </MoviesProvider>
    </div>
  );
}

export default App;
