import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const Cart = () => {
    const { cartItems, setCartItems } = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)
    const [deleteId, setDeleteId] = useState(null);
    
    const handleRemove = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id))
        setShowModal(false)
    }
    const consifrmDelete = () => (

        <div className="fixed inset-0 flex items-center 
        justify-center bg-black bg-opacity-50"
        >
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <p className="text-lg mb-4 font-semibold">Are you sure you want to delete this item?</p>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => handleRemove(deleteId)}
                        className="bg-red-500 text-white px-4 py-2 
                    rounded hover:bg-red-600 transition"
                    >
                        Yes
                    </button>
                    <button
                        onClick={() => setShowModal(false)}
                        className="bg-gray-300 text-black px-4 py-2 
                    rounded hover:bg-gray-400 transition"
                    >
                        No
                    </button>
                </div>
            </div>
        </div>

    )
    const totalItems = cartItems.length
    const totalPrice = cartItems.reduce((accumulator, currentProduct) => {
        return accumulator + currentProduct.price * currentProduct.qty
    }, 0)


    const handleIncrement = (product) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === product.id
                    ? { ...item, qty: item.qty + 1 }
                    : item
            )
        );
    };

    const handleDecrement = (product) => {
        if (product.qty <= 1) {
            setCartItems(cartItems.filter((item) => item.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id
                        ? { ...item, qty: item.qty - 1 }
                        : item
                )
            );
        }
    };


    return (
        <div className="max-w-[90%] mx-auto my-6">
            {
                cartItems.length !== 0 ?
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="flex-1">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2 flex items-center gap-2">
                                <BsCart4 className="text-green-600 text-3xl" />
                                Your Shopping Cart
                            </h2>
                            <div className="hidden sm:flex justify-between items-center px-4 py-2 mb-2 bg-gray-100 font-semibold text-gray-700 border-b rounded-t-md">
                                <p className="flex-1 text-left">Name</p>
                                <p className="w-20 text-center">Price</p>
                                <p className="w-28 text-center">Quantity</p>
                                <p className="w-24 text-center">Total</p>
                                <p className="w-16 text-center">Remove</p>
                            </div>
                            <ul className="flex-1 space-y-4">
                                {cartItems.map(item => (
                                    <li key={item.id}
                                        className="border rounded-lg p-3 flex 
                                            flex-col sm:flex-row items-center 
                                            justify-between shadow-sm 
                                            hover:shadow-md transition"
                                    >
                                        <div className="flex items-center gap-4 grow w-full sm:w-auto"
                                        >
                                            <Link className="flex flex-col md:flex-row items-center gap-4 grow w-full sm:w-auto" to={`/product/${item.id}`}>
                                                <div className="w-24 flex-shrink-0">
                                                    <img className="md:h-16 w-full md:w-16 object-cover rounded"
                                                        src={item.image} alt={item.name}
                                                    />
                                                </div>
                                                <p className="font-medium">{item.name}</p>
                                                <button
                                                type="button"
                                                className="sm:hidden"
                                                onClick={() => { setDeleteId(item.id); setShowModal(true) }}
                                            >
                                                <p className="bg-red-500 text-white rounded-lg px-3 py-2 hover:text-red-700 text-xl"> Remove</p>
                                                <MdDelete className="hidden text-red-500 hover:text-red-700 text-xl" />
                                            </button>
                                            </Link>
                                            
                                        </div>
                                        <div className="flex flex-col sm:flex-row items-center text-right mt-3 sm:mt-0 w-full sm:w-auto">
                                            <p className="w-20 text-center text-gray-700 mt-3 sm:mt-0 font-medium">{item.price}</p>
                                            <div className="w-32 flex items-center justify-center gap-2 mt-3 sm:mt-0">
                                                <button
                                                    onClick={() => handleDecrement(item)}
                                                    className="text-gray-700 hover:text-red-500 transition"
                                                >
                                                    <CiCircleMinus className="text-2xl" />
                                                </button>

                                                <span className="w-6 text-center font-semibold text-gray-800">
                                                    {item.qty}
                                                </span>

                                                <button
                                                    onClick={() => handleIncrement(item)}
                                                    className="text-gray-700 hover:text-green-600 transition"
                                                >
                                                    <CiCirclePlus className="text-2xl" />
                                                </button>
                                            </div>
                                            <p className="w-24 text-center text-gray-800 mt-3 sm:mt-0 font-semibold">{item.price * item.qty}</p>
                                            <button
                                                type="button"
                                                className="hidden sm:block w-16 flex justify-center mt-3 sm:mt-0"
                                                onClick={() => { setDeleteId(item.id); setShowModal(true) }}
                                            >
                                                <MdDelete className="text-red-500 hover:text-red-700 text-xl" />
                                            </button>
                                        </div>
                                    </li>
                                ))} </ul>
                        </div>
                        <div className="max-w-xs w-full p-4 bg-white rounded-lg 
                                    shadow-md border border-gray-200 ml-auto"
                        >
                            <h2 className="text-lg font-semibold mb-3 
                                        text-gray-800 text-center">
                                Cart Summary
                            </h2>

                            <div className="flex justify-between py-2 border-b 
                                        border-gray-200">
                                <span className="text-gray-600 font-medium">Total Items:</span>
                                <span className="text-gray-800 font-semibold">{totalItems}</span>
                            </div>

                            <div className="flex justify-between py-2 border-b border-gray-200">
                                <span className="text-gray-600 font-medium">Total Price:</span>
                                <span className="text-gray-800 font-semibold">₹ {totalPrice}</span>
                            </div>

                            <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition">
                                Checkout
                            </button>
                        </div>

                    </div>
                    :
                    <div className="flex flex-col items-center justify-center 
                                    py-20 text-center bg-gray-50 
                                    rounded-lg shadow-sm">
                        <div className="text-9xl mb-4 text-gray-400">
                            <BsCart4 />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            Your Cart is Empty
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Looks like you haven’t added any items yet.
                        </p>
                        <Link
                            to="/shop"
                            className="bg-green-600 hover:bg-green-700 text-white 
                            px-6 py-2 rounded-lg font-medium transition"
                        >
                            Continue Shopping
                        </Link>
                    </div>

            }

            {showModal && consifrmDelete()}
        </div>

    )
}

export default Cart