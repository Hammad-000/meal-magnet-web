import { MdOutlineShoppingCart } from "react-icons/md";
import { MdStar, MdStarBorder } from "react-icons/md"; // Import star icons

function ProductsCard({ product }) {
  const totalStars = 5; // Maximum stars

  // Calculate filled and empty stars based on product rating
  const filledStars = Math.floor(product.rating);
  const emptyStars = totalStars - filledStars;

  return (
    <div className="h-full w-75 p-4 grid cursor-pointer grid-cols-1">
      <div 
        key={product.id} 
        className="mt-2 border h-120 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        <img
          className="w-full h-50 gap-3"
          src={`/images/${product.image}`} 
          alt={product.title}
        />
        
        {/* Center the name and stars */}
        <div className="text-center p-4">
          <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
          
          {/* Add stars here */}
          <div className="flex justify-center items-center mt-1">
            {[...Array(filledStars)].map((_, i) => (
              <MdStar key={i} className="text-yellow-500" />
            ))}
            {[...Array(emptyStars)].map((_, i) => (
              <MdStarBorder key={i + filledStars} className="text-gray-400" />
            ))}
          </div>
        </div>

        <p className="text-gray-600 m-2">{product.description}</p>
        
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-semibold text-gray-800 hover:text-green-500">
              ${product.price} 
            </h4>
            <MdOutlineShoppingCart className="text-lg text-gray-800 hover:text-blue-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsCard;
