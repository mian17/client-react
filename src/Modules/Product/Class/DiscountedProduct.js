import Product from "./Product";

export default class DiscountedProduct extends Product {
  constructor(
    productId,
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
