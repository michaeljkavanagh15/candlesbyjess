import DirectoryItem from "../directory-item/directory-item.component";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  DirectoryContainer
} from "./directory.styles";
import { useEffect, useState } from "react";
import { setCategories } from "../../store/categories/category.reducer";
import { useSelector, useDispatch } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import LoadingSpinner from "../loading-spinner/loading-spinner.component";

const Directory = () => {
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
    <LoadingSpinner />
  ) : (
    <DirectoryContainer>
      {Object.keys(categoriesMap).map((category) => {
        const images = categoriesMap[category].images;
        const route = categoriesMap[category].route;

        return (
          <DirectoryItem
            key={category}
            title={category}
            images={images}
            route={route}
          />
        );
      })}
    </DirectoryContainer>
  );
};

export default Directory;
