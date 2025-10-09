import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cartItems, setCartItems } = useContext(CartContext)
    const handleRemove = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id))
    }
    const totalItems = cartItems.length
    const totalPrice = cartItems.reduce((accumulator, currentProduct) => {
        return accumulator + currentProduct.price
    }, 0)
    return (
        <div className="max-w-[90%] mx-auto">
            {
                cartItems.length !== 0 ? <><ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            <div className="flex items-center justify-between py-2">
                                <div className="w-56">
                                    <img className="h-16" src={item.image} alt={item.name} />
                                </div>
                                <p className="grow">{item.name}</p>
                                <p className="w-56 text-right pr-5">{item.price}</p>
                                <button
                                    type="button"
                                    className="width-56"
                                    onClick={() => handleRemove(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))} </ul>
                    <div className="flex flex-col items-end text-right">
                        <div className="flex justify-between w-48">
                            <p>Total Items:</p>
                            <p>{totalItems}</p>
                        </div>
                        <div className="flex justify-between w-48">
                            <p>Total Price:</p>
                            <p>{totalPrice}</p>
                        </div>
                    </div>
                </>
                    :
                    <div>
                        <p className="font-2xl text-center"> No Cart Items Found</p>
                        <p className="text-center">Continue <Link to="/shop" className="text-blue-500 font-bold">Shop</Link></p>
                    </div>
            }


        </div>
    )
}

export default Cart