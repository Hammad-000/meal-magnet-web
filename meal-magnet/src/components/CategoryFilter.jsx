import Checkbox from "../components/Cheakbox";
import { categoryTitle } from "../data/category";

function CategoryFilter({ selectedCategories, onChangeCategory }) {
  return (
    <div className="h-55 p-5 space-y-2 border border-gray-200 shadow-lg rounded-md">
      <h3 className="font-semibold text-lg">Category Filter</h3>
      {categoryTitle.map((category, index) => (
        <Checkbox
          key={index}
          text={category}
          checked={selectedCategories.includes(category)}
          onChange={(e) => onChangeCategory(category, e.target.checked)}
        />
      ))}
    </div>
  );
}

export default CategoryFilter;