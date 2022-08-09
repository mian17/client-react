export default class ProductInCart {
  constructor(
    cartId,
    productImgUrl,
    productName,
    productPrice,
    productQuantity
  ) {
    this.cartId = cartId;
    this.productImgUrl = productImgUrl;
    this.productName = productName;
    this.productPrice = productPrice;
    this.productQuantity = productQuantity;
  }
}

//     cartId: 2,
//     productImgUrl: cart_3,
//     productName: "Organic Bananas",
//     productPrice: 68000,
//     productQuantity: 1,
//   },
