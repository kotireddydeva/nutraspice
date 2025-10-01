import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const allProducts = [
        { id: 1, name: "Product 1", price: 499, image: "https://placehold.co/300x200/F7D0B3/422402?text=Product", description: "Details of Product 1" },
        { id: 2, name: "Product 2", price: 799, image: "https://placehold.co/300x200/F7D0B3/422402?text=Product", description: "Details of Product 2" },
        { id: 3, name: "Product 3", price: 299, image: "https://placehold.co/300x200/F7D0B3/422402?text=Product", description: "Details of Product 3" },
      ];
      const prod = allProducts.find(p => p.id === parseInt(id));
      setProduct(prod);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p className="text-center mt-8">Loading...</p>;

  return (
    <div className="max-w-[90%] mx-auto py-8 flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <img src={product.image} alt={product.name} className="w-full rounded" />
      </div>
      <div className="md:w-1/2 flex flex-col gap-4">
        <h2 className="text-3xl font-bold">{product.name}</h2>
        <p className="text-2xl text-blue-600 font-semibold">${product.price}</p>
        <p className="text-gray-700">{product.description}</p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition w-40">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
