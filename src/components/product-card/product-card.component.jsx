import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
  ButtonDiv,
} from "./product-card.styles";
import { useDispatch } from "react-redux";

import Button from "../button/button.component";
import { addItemToCart } from "../../store/cart/cart.reducer";

const ProductCard = ({ product, category }) => {
  const { price, name, images, id } = product;
  const route = `/shop/${category}/${id}`;
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(product));

  return (
    <div>
      <ProductCardContainer to={route}>
        <img src={images[0]} alt={`${name}`} />
        <Footer>
          <Name>{name}</Name>
          <Price>${price}</Price>
        </Footer>
      </ProductCardContainer>
      <ButtonDiv>
        <Button onClick={addProductToCart}>Add to cart</Button>
      </ButtonDiv>
    </div>
  );
};

export default ProductCard;
