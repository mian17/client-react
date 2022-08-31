export default class ProductStateToAddToCart {
  constructor(
    productId,
    modelId,
    productImgUrl,
    productName,
    productPrice,
    productQuantity,
    cartIdFromServer
  ) {
    this.productId = productId;
    this.modelId = modelId;
    this.productImgUrl = productImgUrl;
    this.productName = productName;
    this.productPrice = productPrice;
    this.productQuantity = productQuantity;
    this.cartIdFromServer = cartIdFromServer;
  }
}
