export default class Product {
  constructor(
    productId,
    modelId,
    imageUrl,
    altImageUrl,
    imageUrlOnHover,
    altImageUrlOnHover,
    productName,
    price,
    description,
    statusCode,
    isSelectable
  ) {
    this.productId = productId;
    this.modelId = modelId;
    this.imageUrl = imageUrl;
    this.altImageUrl = altImageUrl;
    this.imageUrlOnHover = imageUrlOnHover;
    this.altImageUrlOnHover = altImageUrlOnHover;
    this.productName = productName;
    this.price = price;
    this.description = description;
    this.statusCode = statusCode;
    this.isSelectable = isSelectable;
  }
}
