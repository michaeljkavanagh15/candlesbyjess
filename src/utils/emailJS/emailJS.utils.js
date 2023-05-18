import emailjs from "@emailjs/browser";

export const sendEmail = (clientName, checkoutItems={}, clientAddress) => {
  let stringCheckoutItems = "";
  checkoutItems.forEach((item) => {
    stringCheckoutItems += `price: $ ${item.price}, name: ${item.name}, quantity: ${item.quantity}, scent: ${item.scent}, item_id: ${item.id}\n`;
  });
  let templateParams = {
    clientName: clientName,
    clientAddress: clientAddress,
    purchasedItems: stringCheckoutItems,
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
