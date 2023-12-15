import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { NavBarComponent } from "../components/NavBarComponent/NavBarComponent";
import Category  from "../pages/Category"
import { Item }  from "../pages/Item";

export const MainRoutes = () => {
  return (
    <Router>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/item/:productId" element={<Item />} />
      </Routes>
    </Router>
  );
};