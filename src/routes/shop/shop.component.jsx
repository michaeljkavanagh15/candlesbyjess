import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/category.reducer";
import Category from "../category/category.component";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
      console.log("shop component dispatch");
    };
    getCategoriesMap();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" index element={<CategoriesPreview />} />
        <Route path=":category/*" index element={<Category />} />
      </Routes>
    </div>
  );
};

export default Shop;
