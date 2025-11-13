import { products as DBProducts } from "./products";

export const getVisibleProducts = (
  selectedCategories,
  selectedRating,
  initPriceRange,
  searchTerm
) => {
  // Start with the full product database
  let products = DBProducts;

  // Apply category filter if selected
  if (selectedCategories.length > 0) {
    products = products.filter((product) =>
      selectedCategories.includes(product.category)
    );
  }

  // Apply rating filter if selected
  if (selectedRating) {
    products = products.filter((product) => product.rating >= selectedRating);
  }

  // Apply price filter if it is applied
  if (initPriceRange.isApplied) {
    products = products.filter(
      (product) =>
        product.price >= initPriceRange.min && product.price <= initPriceRange.max
    );
  }

  // Apply search term filter if provided
  if (searchTerm) {
    const searchLower = searchTerm.toLowerCase();
    products = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower)
    );
  }

  return products;
};
