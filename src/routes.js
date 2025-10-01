import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import CategoryCollection from "./pages/CategoryCollection";
import ProductDetails from "./pages/ProductDetail";

const RouteComponents = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/category/:category" element={<CategoryCollection />} />
        <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
)

export default RouteComponents