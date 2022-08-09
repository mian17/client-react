import MostPopularCategory from "./MostPopularCategory";

export default class MostPopularCategoryWithImage extends MostPopularCategory {
  constructor(id, categoryId, name, url, imageUrl) {
    super(id, categoryId, name, url);
    this.imageUrl = imageUrl;
  }
}
