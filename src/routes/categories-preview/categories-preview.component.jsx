import { selectCategoriesMap } from "../../store/categories/category.selector";
import { Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setCategories } from "../../store/categories/category.reducer";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { Spinner } from "react-bootstrap";
import NotFound from "../../components/not-found/not-found.component";

const CategoriesPreview = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
      setIsLoading(false);
    };
    getCategoriesMap();
  }, []);
  const categoriesMap = useSelector(selectCategoriesMap);

  return isLoading ? (
    <Spinner />
  ) : (
    <Fragment>
    
      {Object.keys(categoriesMap).map((title) => {
        try {
        const items = categoriesMap[title].items;

        const products = items.filter(({ stock }) => stock >= 1);
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      } 
      catch (error) {
        return <NotFound />
      }
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
