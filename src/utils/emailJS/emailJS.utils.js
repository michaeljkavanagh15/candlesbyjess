import emailjs from "@emailjs/browser";

export const sendEmail = (customerName, shippingName, checkoutItems={}, shippingAddress, shippingCity, shippingState, shippingZipCode, phoneNumber) => {
  let stringCheckoutItems = "";
  checkoutItems.forEach((item, index) => {
    stringCheckoutItems += `Item #${index + 1}: price: $ ${item.price}, name: ${item.name}, quantity: ${item.quantity}, scent: ${item.scent}, item_id: ${item.id}.
  \n`;
  });
  let templateParams = {
    customerName: customerName,
    shippingName: shippingName,
    shippingAddress: shippingAddress,
    purchasedItems: stringCheckoutItems,
    shippingCity: shippingCity,
    shippingState: shippingState,
    shippingZipCode: shippingZipCode,
    phoneNumber: phoneNumber
  };
  emailjs
    .send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};
