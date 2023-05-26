import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {
  selectCartTotal,
  selectCartItems,
} from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import FormInput from "../form-input/form-input.component";

import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
} from "./payment-form.styles";
import {
  getCartItemStock,
  getCategoriesAndDocuments,
  getItemStock,
  getUserDisplayName,
} from "../../utils/firebase/firebase.utils";
import { sendEmail } from "../../utils/emailJS/emailJS.utils";
import CustomerCheckoutForm from "../customer-checkout-form/customer-checkout-form.component";
import {
  checkItemQuantityFromCart,
  setItemQuantityFromCart,
} from "../../store/cart/cart.reducer";
import { setCategories } from "../../store/categories/category.reducer";
import { useCheckCartItemQuantity } from "../../utils/cart/cart.utils";

const defaultFormFields = {
  shippingName: "",
  shippingAddress: "",
  shippingCity: "",
  shippingState: "",
  shippingZipCode: "",
  customerState: "",
  phoneNumber: "",
};

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const checkoutItems = useSelector(selectCartItems);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    shippingName,
    shippingAddress,
    shippingCity,
    shippingZipCode,
    shippingState,
    phoneNumber,
  } = formFields;

if (useCheckCartItemQuantity(checkoutItems)) {
  console.log("Check passed");
} else {
  
  console.log("checkFailed");
}

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());
    const clientSecret = response.paymentIntent.client_secret;

    let customerName = currentUser
      ? currentUser.displayName
        ? currentUser.displayName
        : await getUserDisplayName(currentUser.uid)
      : "Guest";
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: customerName,
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert(`Payment Successful! Thank you ${customerName}!`);

        sendEmail(
          customerName,
          shippingName,
          checkoutItems,
          shippingAddress,
          shippingCity,
          shippingState,
          shippingZipCode,
          phoneNumber
        );
        // Send email confirmation to admin email
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Checkout Now: </h2>
        <FormInput
          label="Ship To Name"
          type="text"
          required
          onChange={handleChange}
          name="shippingName"
          value={shippingName}
        />

        <FormInput
          label="Street Address"
          type="text"
          required
          onChange={handleChange}
          name="shippingAddress"
          value={shippingAddress}
        />

        <FormInput
          label="City"
          type="text"
          required
          onChange={handleChange}
          name="shippingCity"
          value={shippingCity}
        />

        <FormInput
          label="State"
          type="text"
          required
          onChange={handleChange}
          name="shippingState"
          value={shippingState}
        />

        <FormInput
          label="Zip Code"
          type="text"
          required
          onChange={handleChange}
          name="shippingZipCode"
          value={shippingZipCode}
        />

        <FormInput
          label="Phone Number"
          type="text"
          // required
          onChange={handleChange}
          name="phoneNumber"
          value={phoneNumber}
        />

        <CardElement />
        <PaymentButton isLoading={isProcessingPayment}> Pay Now </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
