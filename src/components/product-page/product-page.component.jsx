import { useParams } from "react-router-dom";
import ImageCarousel from "../carousel/carousel.components";
import { selectCategoriesMap } from "../../store/categories/category.selector";

import {
  ProductPageContainer,
  ProductName,
  ProductInfoContainer,
  ProductDescription,
} from "./product-page.styles";
import Button from "../button/button.component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addItemToCart, setIsCartOpen } from "../../store/cart/cart.reducer";
import { setCategories } from "../../store/categories/category.reducer";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { Spinner } from "react-bootstrap";
import NotFound from "../not-found/not-found.component";

const ProductPage = ({ products }) => {
  const [isLoading, setIsLoading] = useState(false);

  let item;
  const { category, id } = useParams();
  const dispatch = useDispatch();

 


  useEffect(() => {
    dispatch(setIsCartOpen(false));
    window.scrollTo(0, 0);
    setIsLoading(true)
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
      setIsLoading(false)
    };
    getCategoriesMap();

  }, []);
  const categoriesMap = useSelector(selectCategoriesMap);

  try {
  if (isFinite(id)) {
   item = categoriesMap[category].items.filter((product) => product.id === parseInt(id));
  }

    const { name, stock, price, scent, description, images } = item[0]
    const addProductToCart = () => dispatch(addItemToCart(item[0]));

  
  return (
    isLoading ? <Spinner /> : 
    <ProductPageContainer>
      <ProductName>{name}</ProductName>
      <ProductInfoContainer>
        <ImageCarousel images={images} />
        <ProductDescription>
          <p>Price: ${price}</p>
          <p>Scent: {scent}</p>
          <p>{description}</p>
          {stock ? <Button onClick={addProductToCart}>Add to Cart</Button> : <h3>Sorry, this item is out of stock!</h3>}
        </ProductDescription>
      </ProductInfoContainer>
    </ProductPageContainer> 
  );
} catch (error) {
  return <NotFound />
}
};

export default ProductPage;
