import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCategoriesAsync } from "../../store/categories/category.action.js";
import Category from "../category/category.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import "./shop.styles.jsx";
import { useEffect } from "react";
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []); // Dispatch only runs once
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
