
import React, { useState } from 'react';
import { CheckoutNowButton } from './checkout-slide.styles';
import Offcanvas from 'react-bootstrap/Offcanvas';
import PaymentForm from "../../components/payment-form/payment-form.component";


const CheckoutSlide = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <CheckoutNowButton  onClick={handleShow}>
        Checkout
      </CheckoutNowButton>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Checkout</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <PaymentForm />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CheckoutSlide;