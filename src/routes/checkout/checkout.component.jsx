import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { ButtonContainer, CheckoutContainer, Total } from "./checkout.styles";
import { setIsCartOpen } from "../../store/cart/cart.reducer";
import CheckoutSlide from "../../components/checkout-slide/checkout-slide.component";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  dispatch(setIsCartOpen(false));

  return (
    <div>
    <CheckoutContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      </CheckoutContainer>
      <ButtonContainer>
        <CheckoutSlide />
        <Total>Total: ${cartTotal} </Total>
      </ButtonContainer>
    
    </div>
  );
};

export default Checkout;
