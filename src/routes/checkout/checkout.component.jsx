import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import { ButtonContainer, CheckoutContainer, Total } from "./checkout.styles";
import { setIsCartOpen } from "../../store/cart/cart.reducer";
import CheckoutSlide from "../../components/checkout-slide/checkout-slide.component";
import { setCategories } from "../../store/categories/category.reducer";
import { Spinner } from "react-bootstrap";
import { useCheckCartItemQuantity } from "../../utils/cart/cart.utils";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const isCartOpen = useSelector(selectIsCartOpen)
  const [isLoading, setIsLoading] = useState(false);
  useCheckCartItemQuantity(cartItems);
  useEffect(() => {
    if (isCartOpen) {
      dispatch(setIsCartOpen(false));

    }
    setIsLoading(true);
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
      setIsLoading(false);
    };
    getCategoriesMap();
  }, []);
  
  return isLoading ? <Spinner /> :
   (
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
