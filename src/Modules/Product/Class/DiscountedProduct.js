import Product from "./Product";

export default class DiscountedProduct extends Product {
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
    isSelectable,
    discountedPrice
  ) {
    super(
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
    );
    this.discountedPrice = discountedPrice;
  }
}
