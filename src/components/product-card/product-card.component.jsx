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
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { useSelector } from "react-redux";

const ProductCard = ({ product, category }) => {
  const { price, name, images, id } = product;
  const route = `/shop/${category}/${id}/`;
  const dispatch = useDispatch();
  const categoriesMap = useSelector(selectCategoriesMap);
  const item = categoriesMap[category].items.filter(
    (product) => product.id === parseInt(id)
  );

  const addProductToCart = () => dispatch(addItemToCart([product, item[0].stock]));

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
