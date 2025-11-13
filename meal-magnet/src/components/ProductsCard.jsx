import '../../src/App.css';
import { MdOutlineShoppingCart } from "react-icons/md";

function ProductsCard({ product }) {
  return (
    <div className="h-full w-65 p-4 grid  grid-cols-1 ">  
      <div 
        key={product.id} 
        className="mt-2  border h-120 bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        <img
          className="w-full h-50 gap-3"
          src={`/images/${product.image}`} 
          alt={product.title}
        />
        <h3 className="text-xl font-semibold text-gray-800 p-4">{product.title}</h3>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-semibold text-gray-800">
              ${product.price}
            </h4>
            <MdOutlineShoppingCart className="text-lg text-gray-800 hover:text-blue-500 cursor-pointer" />
          </div>

          <p className="text-gray-600 mt-2">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductsCard;
