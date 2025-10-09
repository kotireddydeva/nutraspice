import { useContext, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Header = () => {
    const { cartItems } = useContext(CartContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <header className="bg-indigo-700 relative mb-5">
            <div className="max-w-[90%] mx-auto">
                <div className="py-2">
                    <ul className="flex gap-5 font-normal text-sm cursor-pointer text-white">
                            <li>Contact</li>
                            <li>About</li>
                        </ul>
                </div>
                <div className="flex justify-between items-center text-white pb-5">
                    <h1 className="font-bold text-2xl"><Link to="/">NutraSpice</Link></h1>
                    <nav className="hidden md:block">
                        <ul className="flex gap-5 font-medium cursor-pointer">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/cart">Cart {cartItems.length > 0 && cartItems.length}</Link></li>
                            <li>Login</li>
                        </ul>
                    </nav>
                    <button className="md:hidden text-3xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <BiX /> : <BiMenu />}
                    </button>
                    {isMenuOpen &&
                        <nav className="absolute p-2 right-0 top-14 bg-indigo-700 text-white md:hidden z-10">
                            <ul className="font-bold px-5">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/shop">Shop</Link></li>
                                <li><Link to="/cart">Cart {cartItems.length > 0 && cartItems.length}</Link></li>
                                <li>Login</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    }
                </div>
            </div>

        </header>
    )
}

export default Header