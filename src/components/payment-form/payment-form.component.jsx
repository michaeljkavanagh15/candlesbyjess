import { async } from "@firebase/util";
import { useState } from "react";
import { useSelector } from "react-redux";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {
  selectCartTotal,
  selectCartItems,
} from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
} from "./payment-form.styles";
import { getUserDisplayName } from "../../utils/firebase/firebase.utils";
import { sendEmail } from "../../utils/emailJS/emailJS.utils";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const checkoutItems = useSelector(selectCartItems);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [address, setAddress] = useState("");

  const handleChange = (e) => {
    setAddress(e.target.value);
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

    let name = currentUser
      ? currentUser.displayName
        ? currentUser.displayName
        : await getUserDisplayName(currentUser.uid)
      : "Guest";
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: name,
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert(`Payment Successful! Thank you ${name}!`);

        sendEmail(name, checkoutItems, address);
        // Send email confirmation to customer and admin email
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <input
          value={address}
          name="address"
          onChange={handleChange}
          placeholder="Your Address"
        ></input>
        <PaymentButton isLoading={isProcessingPayment}> Pay Now </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
