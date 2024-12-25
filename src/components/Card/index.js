import React from 'react';
import { FaSearchPlus, FaHeart, FaExchangeAlt, FaShoppingCart } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

const Card = ({ image, name, price, description }) => {
  return (
    <div className="card border flex flex-col gap-3 relative w-[250px] group">
      {/* Card Image Section */}
      <div className="card-img w-[250px] h-[250px] relative overflow-hidden">
        <img
          src={image}
          className="w-full h-full object-fill hover:scale-110 transition-transform ease-in-out duration-300"
          alt={name}
        />
        {/* Vertical Icons */}
        <div className="absolute top-0 left-0 flex flex-col items-center justify-center gap-3 p-2 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300 bg-black bg-opacity-50">
          <button className="p-2 bg-white rounded-full hover:bg-gray-200">
            <FaSearchPlus size={20} className="text-gray-700" title="Quick View" />
          </button>
          <button className="p-2 bg-white rounded-full hover:bg-gray-200">
            <FaHeart size={20} className="text-gray-700" title="Add to Wishlist" />
          </button>
          <button className="p-2 bg-white rounded-full hover:bg-gray-200">
            <FaExchangeAlt size={20} className="text-gray-700" title="Compare" />
          </button>
          <button className="p-2 bg-white rounded-full hover:bg-gray-200">
            <FaShoppingCart size={20} className="text-gray-700" title="Add to Cart" />
          </button>
        </div>
      </div>
      {/* Card Details */}
      <div className="card-details flex flex-col gap-2">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="card-rating flex gap-1">
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
        </div>
        <h2 className="text-lg font-bold">{price}</h2>
      </div>
    </div>
  );
};

export default Card;
