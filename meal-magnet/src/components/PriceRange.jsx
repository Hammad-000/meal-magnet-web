import React from "react";

const PriceRange = ({ priceRange, initPriceRange, setInitPriceRange }) => {
  const handlePriceChange = (e) => {
    setInitPriceRange(parseInt(e.target.value));  
  };

  return (
    <div className="my-4">
      <label className="block text-sm font-semibold">Price Range</label>
      <input
        type="range"
        min={priceRange.min}
        max={priceRange.max}
        value={initPriceRange.max}
        onChange={handlePriceChange}  
        className="w-full"
      />
      <div className="flex justify-between text-sm">
        <span>${priceRange.min}</span>
        <span>${initPriceRange.max}</span>
      </div>
    </div>
  );
};

export default PriceRange;
