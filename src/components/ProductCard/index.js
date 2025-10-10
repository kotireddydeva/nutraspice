import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const ProductCard = ({ product }) => {
  const { cartItems, setCartItems } = useContext(CartContext)
  const existingCartItem = cartItems.find(item => item.id === product.id);
  const [qty, setQty] = useState(existingCartItem ? existingCartItem.qty : 1);
  const navigate = useNavigate()
  const handleAddToCart = () => {
    setCartItems([...cartItems, { ...product, qty }])
  }
  const handleGotoCart = () => {
    navigate('/cart');
  }
  const handleBuyNow = () => {
    existingCartItem ? navigate('/cart') : setCartItems([...cartItems, { ...product, qty }], navigate('/cart'))
  }

  const handleIncrement = () => {
    const newQty = qty + 1;
    setQty(newQty);

    setCartItems(
      cartItems.map((item) =>
        item.id === product.id ? { ...item, qty: newQty } : item
      )
    );
  };

  const handleDecrement = () => {
    const newQty = qty - 1;

    if (newQty <= 0) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setQty(newQty);
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, qty: newQty } : item
        )
      );
    }
  };

  const handleRemove = () => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
    setQty(1);
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
      <div className="flex flex-col items-center justify-center gap-3 mt-4">
        {existingCartItem ? (
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-3 w-full justify-center">
              <button
                onClick={handleRemove}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition w-28 text-sm font-medium"
              >
                Remove
              </button>
              <div className="flex items-center justify-center bg-gray-100 rounded-full px-4 py-2 shadow-sm">
                <button
                  onClick={handleDecrement}
                  className="text-gray-600 hover:text-red-500 transition"
                >
                  <CiCircleMinus className="text-2xl" />
                </button>
                <span className="w-8 text-center font-semibold text-gray-800">
                  {qty}
                </span>
                <button
                  onClick={handleIncrement}
                  className="text-gray-600 hover:text-green-600 transition"
                >
                  <CiCirclePlus className="text-2xl" />
                </button>
              </div>
            </div>
            <div className="flex gap-3 w-full justify-center">
              <button
                onClick={handleGotoCart}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-28 text-sm font-medium"
              >
                Go to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition w-28 text-sm font-medium"
              >
                Buy Now
              </button>
            </div>
          </div>
        ) : (
          <div className="flex gap-3 w-full justify-center">
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-32 text-sm font-medium"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition w-32 text-sm font-medium"
            >
              Buy Now
            </button>
          </div>
        )}
      </div>

    </div>
  );
};

export default ProductCard;
