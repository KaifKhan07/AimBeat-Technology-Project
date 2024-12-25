import React from "react";
import menu from "../../assets/Images/png/menu.png";
import hamburger from "../../assets/Images/png/menu-button.png";
import Data from "../../api/data.json";
import Card from "../Card";
import { FaFilter } from "react-icons/fa";

const Categories = ({ selectedCategories }) => {
  const filteredProducts = Data.Products.filter(product => {
    const isCategoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return isCategoryMatch;
});

  return (
    <div>
      <div className="pt-6 flex flex-col">
        <div className="all-filter flex flex-col items-center justify-between pb-5 md:flex-row gap-3">
          <div className="menu-img flex items-center gap-3">
            <div className="menu h-[40px] w-[40px] border-2 border-black px-1 py-1">
              <img src={menu} alt="Menu Icon" className="h-full w-full" />
            </div>
            <div className="hamburger h-[40px] w-[40px] border-2 border-gray-400 px-1 py-1">
              <img
                src={hamburger}
                alt="Hamburger Icon"
                className="h-full w-full"
              />
            </div>
            <div className="pl-5">Showing {filteredProducts.length} of results</div>
          </div>

          <div className="filter-category flex gap-3">
            <select
              name="sort"
              id="sort"
              className="border-2 px-0 py-2 sm:px-2 sm:py-3 border-gray-300 text-sm"
            >
              <option value="sorting">Default sorting</option>
              <option value="low-to-high">Sort by: Low to High</option>
              <option value="high-to-low">Sort by: High to Low</option>
            </select>
            <button className="bg-black text-white px-10 flex items-center gap-2">
              <FaFilter />
              Filter
            </button>
          </div>
        </div>
      </div>

      <div className="Products-data pt-5 flex flex-wrap gap-5 justify-center md:justify-start">
        {filteredProducts.map((product, index) => {
          const imagePath = require(`../../assets/Images/png/${product.image}`);
          return (
            <Card
              key={index}
              id={product._id}
              image={imagePath}
              name={product.name}
              description={product.description}
              rating={product.rating}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
