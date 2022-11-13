export const currencyFormatOptions = {
  style: "currency",
  currency: "VND",
};

// Maximum 100 for buying product
export const PRODUCT_QUANTITY_LIMIT = 100;

export const calculateTotalMoney = (products) => {
  return products.reduce((prevTotalMoney, curProduct) => {
    return (
      prevTotalMoney + curProduct.productPrice * curProduct.productQuantity
    );
  }, 0);
};
