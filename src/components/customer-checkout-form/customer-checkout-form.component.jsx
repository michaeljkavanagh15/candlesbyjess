import FormInput from "../form-input/form-input.component";
import { useState } from "react";


const defaultFormFields = {
    shippingName: "",
    streetAddress: "",
    zipCode: "",
    customerState: "",
    phoneNumber: "",

}
const CustomerCheckoutForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { shippingName, streetAddress, zipCode, customerState, phoneNumber } = formFields;


  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  
  return (
    <form>
      <FormInput
        label="Customer Name"
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
        name="streetAddress"
        value={streetAddress}
      />

<FormInput
        label="Zip Code"
        type="text"
        required
        onChange={handleChange}
        name="zipCode"
        value={zipCode}
      />

<FormInput
        label="State"
        type="text"
        required
        onChange={handleChange}
        name="customerState"
        value={customerState}
      />

<FormInput
        label="Phone Number"
        type="text"
        // required
        onChange={handleChange}
        name="phoneNumber"
        value={phoneNumber}
      />

    </form>
  );
};

export default CustomerCheckoutForm;
