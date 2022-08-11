export default class Product {
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
    gallery
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.subcategory = subcategory;
    this.merchant = merchant;
    this.brand = brand;
    this.origin = origin;
    this.description = description;
    this.price = price;
    this.costPrice = costPrice;
    this.details = details;
    this.gallery = gallery;
  }
}
// id, name, category, subcategory, merchant, brand, origin, description, price, costPrice, details, gallery
