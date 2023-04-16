import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.reducer";

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
  NameLink
} from "./checkout-item.styles";
import { getItemCategory } from "../../utils/firebase/firebase.utils";

const CheckoutItem = ({ cartItem }) => {
  const { name, images, price, quantity, id } = cartItem;
  const dispatch = useDispatch();
const itemCategory = getItemCategory(id);

  const route = `/shop/${itemCategory}/${id}`;

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));
console.log(images);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Link to={route}>
          <img src={images} alt={`${name}`} />
        </Link>
      </ImageContainer>
      <BaseSpan> <NameLink to={route}>{name} </NameLink></BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> ${price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
