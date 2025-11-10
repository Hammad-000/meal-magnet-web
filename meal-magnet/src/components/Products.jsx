import ProductCard from "./ProductsCard";      

function Products({ products = [] }) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;