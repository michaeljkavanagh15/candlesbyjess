import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams, Route, Routes } from "react-router-dom";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContainer, Title, OutOfStockMessage } from "./category.styles";
import ProductPage from "../../components/product-page/product-page.component";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    products &&
      setProducts(categoriesMap[category].filter(({ stock }) => stock >= 1));
  }, [category, categoriesMap]);

  return (
    <Routes>
      <Route
        path="*"
        index
        element={
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
          </Fragment>
        }
      />
      <Route path=":id" element={<ProductPage products={products} />} />
    </Routes>
  );
};

export default Category;
