import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = [
        { id: 1, name: "White Wholes 180", price: 950, image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759933603/White_Wholes_180_oajppn.png", category: "cashew" },
        { id: 2, name: "White Wholes 240", price: 880, image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759933603/White_Wholes_180_oajppn.png", category: "cashew" },
        { id: 3, name: "Scorched Wholes 240", price: 820, image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759933603/White_Wholes_180_oajppn.png", category: "cashew" },
        { id: 4, name: "Split Cashew 2P", price: 760, image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759933603/White_Wholes_180_oajppn.png", category: "cashew" },
        { id: 5, name: "Cashew Pieces 8", price: 640, image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759933603/White_Wholes_180_oajppn.png", category: "cashew" },
        { id: 6, name: "California Almonds", price: 750, image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934357/California_Almonds_nbfz4m.png", category: "almond" },
        { id: 7, name: "Iran Almonds", price: 680, image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934357/California_Almonds_nbfz4m.png", category: "almond" },
        { id: 8, name: "Gurbandi Almonds", price: 890, image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934357/California_Almonds_nbfz4m.png", category: "almond" },
        { id: 9, name: "Mamra Almonds", price: 1250, image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934357/California_Almonds_nbfz4m.png", category: "almond" },
        { id: 10, name: "Roasted Salted Almonds", price: 940, image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934357/California_Almonds_nbfz4m.png", category: "almond" },
        { id: 11, name: "Black Pepper Bold", price: 720, image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934570/Black_Pepper_Bold_vsyvo3.png", category: "pepper" },
        { id: 12, name: "Black Pepper MG1", price: 780, image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934570/Black_Pepper_Bold_vsyvo3.png", category: "pepper" },
        { id: 13, name: "Black Pepper 500G/L", price: 690, image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934570/Black_Pepper_Bold_vsyvo3.png", category: "pepper" },
        { id: 14, name: "White Pepper", price: 980, image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934570/Black_Pepper_Bold_vsyvo3.png", category: "pepper" },
        { id: 15, name: "Ground Pepper Powder", price: 560, image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934570/Black_Pepper_Bold_vsyvo3.png", category: "pepper" },
        { id: 16, name: "Green Cardamom 6mm", price: 1250, image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934649/Green_Cardamom_swbgy0.png", category: "ilachi" },
        { id: 17, name: "Green Cardamom 7mm", price: 1420, image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934649/Green_Cardamom_swbgy0.png", category: "ilachi" },
        { id: 18, name: "Green Cardamom 8mm", price: 1650, image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934649/Green_Cardamom_swbgy0.png", category: "ilachi" },
        { id: 19, name: "Bold Green Cardamom", price: 1850, image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934649/Green_Cardamom_swbgy0.png", category: "ilachi" },
        { id: 20, name: "Broken Cardamom", price: 1050, image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934649/Green_Cardamom_swbgy0.png", category: "ilachi" },
        { id: 21, name: "Ceylon Cinnamon Sticks", price: 780, image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934647/Ceylon_Cinnamon_yztrpj.png", category: "cinnamon" },
        { id: 22, name: "Cassia Cinnamon", price: 640, image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934647/Ceylon_Cinnamon_yztrpj.png", category: "cinnamon" },
        { id: 23, name: "Cinnamon Powder", price: 590, image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934647/Ceylon_Cinnamon_yztrpj.png", category: "cinnamon" },
        { id: 24, name: "Cinnamon Chips", price: 670, image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934647/Ceylon_Cinnamon_yztrpj.png", category: "cinnamon" },
        { id: 25, name: "Cinnamon Bark", price: 710, image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934647/Ceylon_Cinnamon_yztrpj.png", category: "cinnamon" },
        { id: 26, name: "Whole Cloves", price: 880, image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759935062/Whole_Cloves_w4q0e7.png", category: "clove" },
        { id: 27, name: "Zanzibar Cloves", price: 940, image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759935062/Whole_Cloves_w4q0e7.png", category: "clove" },
        { id: 28, name: "Sri Lankan Cloves", price: 1020, image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759935062/Whole_Cloves_w4q0e7.png", category: "clove" },
        { id: 29, name: "Clove Powder", price: 740, image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759935062/Whole_Cloves_w4q0e7.png", category: "clove" },
        { id: 30, name: "Broken Cloves", price: 660, image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759935062/Whole_Cloves_w4q0e7.png", category: "clove" },
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
