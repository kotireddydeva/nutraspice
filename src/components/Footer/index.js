import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaWhatsapp
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-indigo-700 mt-5">
            <div className="max-w-[90%] mx-auto py-10 grid grid-cols-2 md:grid-cols-4 gap-10">
                <div className="text-white">
                    <h1>About</h1>
                </div>
                <div className="text-white">
                    <h1>Contact</h1>
                </div>
                <div className="text-white">
                    <h1 className="mb-2">Quick Links</h1>
                    <ul className="font-small cursor-pointer">
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Login</li>
                    </ul>
                </div>
                <div className="text-white">
                    <h1 className="mb-2">Follow Us On</h1>
                    <div className="flex gap-5 flex-wrap">
                        <a href="https://www.facebook.com/"><FaFacebook /></a>
                        <a href="https://x.com/"><FaTwitter /></a>
                        <a href="https://www.instagram.com/"><FaInstagram /></a>
                        <a href="https://www.pinterest.com/"><FaPinterest /></a>
                        <a href="https://www.whatsapp.com/"><FaWhatsapp /></a>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer