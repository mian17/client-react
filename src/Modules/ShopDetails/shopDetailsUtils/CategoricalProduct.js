import Product from "./Product";

export default class CategoricalProduct extends Product {
  constructor(
    id,
    name,
    category,
    subcategory,
    merchant,
    brand,
    origin,
    description,
    price,
    costPrice,
    details,
    gallery,
    productCategories
  ) {
    super(
      id,
      name,
      category,
      subcategory,
      merchant,
      brand,
      origin,
      description,
      price,
      costPrice,
      details,
      gallery
    );
    this.productCategories = productCategories;
  }
}
