import { CartImage, CartItemContainer, ItemDetails } from "./cart-item.styles";

import { getItemCategory } from "../../utils/firebase/firebase.utils";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../../store/cart/cart.reducer";

const CartItem = ({ cartItem }) => {
  const { name, images, price, quantity, id } = cartItem;
  const itemCategory = getItemCategory(id);
  const route = `/shop/${itemCategory}/${id}`;
  
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate(route);
    setIsCartOpen(false);
  };
  return (
    <CartItemContainer>
      <CartImage onClick={navigateHandler} src={images[0]} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
