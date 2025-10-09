import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { cartItems, setCartItems } = useContext(CartContext)
  const existingCartItem = cartItems.find(item => item.id === product.id);
  const [qty, setQty] = useState(existingCartItem ? existingCartItem.qty : 1);
  const navigate = useNavigate()
  const handleAddToCart = () => {
    setCartItems([...cartItems, { ...product, qty }])
  }
  const handleRemove = () => {
    setCartItems(cartItems.filter(item => item.id !== product.id))
  }
  const handleBuyNow = () => {
    existingCartItem ? navigate('/cart') : setCartItems([...cartItems, { ...product, qty }], navigate('/cart'))
  }

  const handleQty = (e) => {
    const newQty = Number(e.target.value)
    setQty(newQty)
    setCartItems(
      cartItems.map(item =>
        item.id === product.id ? { ...item, qty: newQty } : item
      )
    )
  }

  console.log(cartItems)
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="h-48 object-cover rounded block mx-auto"
        />
        <h3 className="mt-2 font-semibold text-lg">{product.name}</h3>
        <p className="mt-1 text-blue-600 font-bold">₹ {product.price}</p>
      </Link>
      <div className="flex flex-col items-start flex-wrap gap-2">
        {
          existingCartItem ?
            <div className="flex gap-2 items-center">
              <button
                className="mt-3 px-2 bg-red-500 text-white 
                py-2 rounded hover:bg-red-700 transition w-24"
                onClick={handleRemove}>
                Remove
              </button>
              <div className="flex items-center mt-3 gap-2">
                <label htmlFor="quantity" className="mb-1 font-medium text-gray-700">
                  Quantity
                </label>
                <select
                  value={qty}
                  id="quantity"
                  onChange={handleQty}
                  className="px-3 py-2 border border-gray-300 
                  rounded-lg text-gray-700 bg-white cursor-pointer 
                  transition focus:outline-none focus:border-gray-500 
                  focus:ring-1 focus:ring-gray-500 hover:border-gray-400"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                </select>
              </div>

            </div> :
            <button
              className="mt-3 px-3 bg-blue-600 text-white py-2 
              rounded hover:bg-blue-700 transition w-32"
              onClick={handleAddToCart}>
              Add to Cart
            </button>
        }
        <button
          className="mt-3 px-3 bg-green-600 text-white 
          py-2 rounded hover:bg-green-700 transition w-32"
          onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
