import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded"
        />
        <h3 className="mt-2 font-semibold text-lg">{product.name}</h3>
        <p className="mt-1 text-blue-600 font-bold">${product.price}</p>
        <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
