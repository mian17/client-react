import CategoricalProduct from "./CategoricalProduct";

export default class CategoricalDiscountedProduct extends CategoricalProduct {
  constructor(
    productId,
    productKinds,
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
    colorCode,
    discountedPrice,
    categoryImages
  ) {
    super(
      productId,
      productKinds,
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
      colorCode,
      categoryImages
    );
    this.discountedPrice = discountedPrice;
  }
}
