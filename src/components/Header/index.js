import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <header className="bg-indigo-700 relative mb-5">
            <div className="max-w-[90%] mx-auto flex justify-between items-center text-white h-24 ">
                <h1 className="font-bold text-2xl">NutraSpice</h1>
                <nav className="hidden md:block">
                    <ul className="flex gap-5 font-medium cursor-pointer">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Login</li>
                    </ul>
                </nav>
                <button className="md:hidden text-3xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <BiX /> : <BiMenu />}
                </button>
                {isMenuOpen &&
                    <nav className="absolute p-2 right-0 top-14 bg-indigo-700 text-white md:hidden z-10">
                        <ul className="font-bold px-5">
                            <li>Home</li>
                            <li>Shop</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Login</li>
                        </ul>
                    </nav>
                }</div>

        </header>
    )
}

export default Header