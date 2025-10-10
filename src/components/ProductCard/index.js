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
        <div className="flex items-center gap- 10">
        <p className="mt-1 text-blue-600 font-bold">₹ {product.price}</p>
        {existingCartItem && <div className="flex items-center mt-3 gap-3">
                <div className="flex items-center gap-2 px-3 py-1">
                  <button
                    onClick={handleDecrement}
                    className="text-gray-700 hover:text-red-500 transition"
                  >
                    <CiCircleMinus className="text-2xl" />
                  </button>

                  <span className="w-6 text-center font-semibold text-gray-800">
                    {qty}
                  </span>

                  <button
                    onClick={handleIncrement}
                    className="text-gray-700 hover:text-green-600 transition"
                  >
                    <CiCirclePlus className="text-2xl" />
                  </button>
                </div>
              </div>
              

        }
        </div>
      </Link>
      <div className="flex flex-col items-start flex-wrap gap-2">
        {
          existingCartItem ?
            <div className="flex gap-2 items-center">
              <button
                className="mt-3 px-2 bg-blue-500 text-white 
                py-2 rounded hover:bg-blue-700 transition w-24"
                onClick={handleGotoCart}>
                Go to Cart
              </button>
              

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
