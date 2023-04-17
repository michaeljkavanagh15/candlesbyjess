import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { CheckoutContainer, Total } from "./checkout.styles";
import { setIsCartOpen } from "../../store/cart/cart.reducer";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  dispatch(setIsCartOpen(false));

  return (
    <CheckoutContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartTotal} </Total>
    </CheckoutContainer>
  );
};

export default Checkout;
