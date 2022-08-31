import Product from "./Product";

export default class CategoricalProduct extends Product {
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
    categoryImages
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
    this.productKinds = productKinds;
    this.colorCode = colorCode;
    this.categoryImages = categoryImages;
  }
}
