import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.reducer";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { useSelector } from "react-redux";

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
  NameLink,
} from "./checkout-item.styles";
import { getItemCategory } from "../../utils/firebase/firebase.utils";

const CheckoutItem = ({ cartItem }) => {
  const { name, images, price, quantity, id, stock, itemCategoy } = cartItem;
  const dispatch = useDispatch();
  const categoriesMap = useSelector(selectCategoriesMap);
  let item;
  try {
    item = categoriesMap[itemCategoy].items.filter(
      (product) => product.id === parseInt(id)
    );
  } catch (error) {
    console.log(error);
  }

  const itemCategory = getItemCategory(id);
  const route = `/shop/${itemCategory}/${id}`;

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));
  const addItemHandler = async () =>
    dispatch(addItemToCart([cartItem, item[0].stock]));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart([cartItem, item[0].stock]));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Link to={route}>
          <img src={images} alt={`${name}`} />
        </Link>
      </ImageContainer>
      <BaseSpan>
        {" "}
        <NameLink to={route}>{name} </NameLink>
      </BaseSpan>
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
