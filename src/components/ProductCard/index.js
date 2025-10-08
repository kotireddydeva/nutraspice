import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const {cartItems, setCartItems} = useContext(CartContext)
  const handleAddToCart = () => {
    setCartItems([...cartItems, {...product}])
  }
  const handleRemove = () => {
    setCartItems(cartItems.filter(item => item.id !== product.id))
  }
  const isCartAdded = cartItems.some(item => item.id === product.id)
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="h-48 object-cover rounded block mx-auto"
        />
        <h3 className="mt-2 font-semibold text-lg">{product.name}</h3>
        <p className="mt-1 text-blue-600 font-bold">${product.price}</p>
      </Link>
      
      {
        isCartAdded ? 

        <button 
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        onClick={handleRemove}>
          Remove
        </button> :
      <button 
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        onClick={handleAddToCart}>
          Add to Cart
        </button>
}
    </div>
  );
};

export default ProductCard;
