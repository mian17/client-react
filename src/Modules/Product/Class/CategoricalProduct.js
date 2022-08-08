import Product from "./Product";

export default class CategoricalProduct extends Product {
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
    colorCode,
    categoryImages
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
      isSelectable,
      colorCode
    );
    this.categoryImages = categoryImages;
  }
}
