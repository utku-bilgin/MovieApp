import { Routes, Route } from "react-router";
import Home from "../pages/Home/Home";
import Category from "../pages/Category/Category";
import Detail from "../pages/Detail/Detail";

const UserRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/detail/:movieId" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default UserRoutes;
