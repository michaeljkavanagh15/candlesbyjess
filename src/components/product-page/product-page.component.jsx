import { useParams } from "react-router-dom";
import ImageCarousel from "../carousel/carousel.components";
import {
  ProductPageContainer,
  ProductName,
  ProductInfoContainer,
  ProductDescription,
} from "./product-page.styles";
import Button from "../button/button.component";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addItemToCart } from "../../store/cart/cart.reducer";
import { setIsCartOpen } from "../../store/cart/cart.reducer";

const ProductPage = ({ products }) => {
  let item;
  const { id } = useParams();
  const dispatch = useDispatch();

  dispatch(setIsCartOpen(false));

  item = products.filter((product) => product.id === parseInt(id));
  const { name, stock, price, scent, description, images } = item[0];
  const addProductToCart = () => dispatch(addItemToCart(item[0]));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProductPageContainer>
      <ProductName>{name}</ProductName>
      <ProductInfoContainer>
        <ImageCarousel images={images} />
        <ProductDescription>
          <p>Price: ${price}</p>
          <p>Scent: {scent}</p>
          <p>{description}</p>
          {stock && <Button onClick={addProductToCart}>Add to Cart</Button>}
        </ProductDescription>
      </ProductInfoContainer>
    </ProductPageContainer>
  );
};

export default ProductPage;
