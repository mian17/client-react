import MostPopularCategory from "./MostPopularCategory";

// DON'T DELETE
export default class NonLegacyMostPopularCategoryWithImage extends MostPopularCategory {
  constructor(id, categoryId, name, url, imageUrl) {
    super(id, categoryId, name, url);
    this.imageUrl = imageUrl;
  }
}
