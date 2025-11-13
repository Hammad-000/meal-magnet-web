import { useState } from "react";
import CategoryFilter from "./components/CategoryFilter";
import Products from "./components/Products";
import { getVisibleProducts } from "../src/data/product-filter";
import RatingFilter from "./components/RatingFilter";
import { priceRange } from "./data/products";
import SearchBox from "./components/SearchBox"; 
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseCircleOutline } from "react-icons/io5";
import PriceRange from "./components/PriceRange";

const initPriceFilter = {
  min: priceRange.min,
  max: priceRange.max,
  isApplied: false,
};

 

function App() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState("");
  const [initPriceRange, setInitPriceRange] = useState(initPriceFilter);
  const [isFilterOpen, setIsFilterOpen] = useState(false); 
  const [searchTerm, setSearchTerm] = useState("");

 const filterProducts = getVisibleProducts(
    selectedCategories,
    selectedRating,
    initPriceRange,
    searchTerm
  );


  const onChangeCategoryHandler = (category, isChecked) => {
    if (isChecked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    }
  };

  const onChangeRatingHandler = (rating) => {
    setSelectedRating(rating);
  };

   const handleSearchChange = (term) => {
    setSearchTerm(term);  
  };

   const handlePriceChange = (maxPrice) => {
    setInitPriceRange((prevState) => ({
      ...prevState,
      max: maxPrice,
      isApplied: true,  // Mark filter as applied when the user changes the price range
    }));
  };

  return (
    <div className="container mx-auto px-4 py-6 grid grid-cols-6 col-span-8 gap-4">
      
      <div className="flex justify-between items-center mb-4">
        <SearchBox onSearchChange={handleSearchChange} /> 

   
        <button
          className="block lg:hidden p-2"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          {!isFilterOpen ? <AiOutlineMenu size={24} /> : <IoCloseCircleOutline size={24} />}
        </button>
      </div>

      <div className="grid  grid-cols-5 col-span-6  gap-2">
       
        <div
          className={`${
            isFilterOpen ? "block" : "hidden"
          } lg:block lg:col-span-1 border p-4 mt-5 bg-white rounded-md shadow-md h-150`}
        >
          <CategoryFilter
            selectedCategories={selectedCategories}
            onChangeCategory={onChangeCategoryHandler}
          />

         
          <PriceRange
            priceRange={priceRange}
            initPriceRange={initPriceRange}
             setInitPriceRange={handlePriceChange}
          />

          {/* Rating Filter */}
          <RatingFilter
            onChangeRating={onChangeRatingHandler}
            selectedRating={selectedRating}
           
          />
        </div>

        {/* Products Section */}
        <div className="lg:col-span-4">
          <Products products={filterProducts} />
        </div>
      </div>
    </div>
  );
}

export default App;
