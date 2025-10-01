import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = [
        { id: 1, name: "Product 1", price: 499, image: "https://placehold.co/300x200/F7D0B3/422402?text=Product", category: "cashew" },
        { id: 2, name: "Product 2", price: 799, image: "https://placehold.co/300x200/F7D0B3/422402?text=Product", category: "almon" },
        { id: 3, name: "Product 3", price: 299, image: "https://placehold.co/300x200/F7D0B3/422402?text=Product", category: "pepper" },
      ];
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="max-w-[90%] mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
