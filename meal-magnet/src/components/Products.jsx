import ProductCard from "./ProductsCard";  

function Products({ products = [], isLoading = false }) {
  if (isLoading) {
    return <div>Loading...</div>;  // Or you can add a loading spinner
  }

  return (
    <div className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
