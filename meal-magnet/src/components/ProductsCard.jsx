import '../../src/App.css';
import { MdOutlineShoppingCart } from "react-icons/md";

function ProductsCard({ product }) {
  return (
    <div className="h-full flex flex-col ">
      <div 
        key={product.id} 
        className="w-full mt-2 flex flex-col border h-110 gap-2.5 bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        <img
          className="w-full h-52 gap-3"
          src={`/images/${product.image}`} 
          alt={product.title}
        />
        <h3 className="text-xl font-semibold text-gray-800 p-4">{product.title}</h3>
        <div className="p-4 ">
          {/* Price and Cart Icon */}
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
