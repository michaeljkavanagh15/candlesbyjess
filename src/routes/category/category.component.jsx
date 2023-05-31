import { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Route, Routes } from "react-router-dom";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContainer, Title, OutOfStockMessage } from "./category.styles";
import ProductPage from "../../components/product-page/product-page.component";
import { setCategories } from "../../store/categories/category.reducer";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import { Spinner } from "react-bootstrap";
import NotFound from "../../components/not-found/not-found.component";


const Category = () => {
  const { category } = useParams();


  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState([]);
  useEffect( () => {
    window.scrollTo(0, 0);

   
      setIsLoading(true)
      const getCategoriesMap = async () => {
        const categoriesArray = await getCategoriesAndDocuments();
        dispatch(setCategories(categoriesArray));
        setIsLoading(false)
      };
       getCategoriesMap();
      categoriesMap[category] && setProducts(categoriesMap[category].items.filter(({ stock }) => stock >= 1))
  }, []);


  useEffect(() => {
    categoriesMap[category] && products &&
      setProducts(categoriesMap[category].items.filter(({ stock }) => stock >= 1));
  }, [category, categoriesMap]);

  return (
    <Routes>
      <Route
        // path="*"
        index
        element={
          isLoading ? <Spinner /> : (categoriesMap[category] ?
          <Fragment>
            <Title>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Title>
            <CategoryContainer outOfStock={products}>
              {products ? (
                products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    category={category}
                  />
                ))
              ) : (
                <OutOfStockMessage>
                  Sorry, we are out of stock!
                </OutOfStockMessage>
              )}
            </CategoryContainer>
          </Fragment> : <NotFound />)
        }


      />
      <Route path=":id/" element={<ProductPage products={products} />} />
    <Route path="*" element={<NotFound />} />

    </Routes>
  );
};

export default Category;
