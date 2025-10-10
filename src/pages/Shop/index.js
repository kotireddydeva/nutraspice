import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import SearchFilter from "../../components/SearchFilter";
import { FiSearch } from "react-icons/fi";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [sortBy, setSortBy] = useState('new')

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
      setFilteredProducts(data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = products.filter(item =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );


    if (sortBy === "price-low") filtered.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-high") filtered.sort((a, b) => b.price - a.price);
    else if (sortBy === "name-asc") filtered.sort((a, b) => a.name.localeCompare(b.name));
    else if (sortBy === "name-desc") filtered.sort((a, b) => b.name.localeCompare(a.name));
    setFilteredProducts(filtered);
  }, [products, searchInput, sortBy]);

  const resetFilters = () => {
    setSearchInput('')
    setSortBy('new')
  }

  return (
    <div className="max-w-[90%] mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">All Products</h2>
      <SearchFilter
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      {filteredProducts.length > 0 ?
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
          ))}
        </div>
        :
        <div className="w-full flex flex-col items-center justify-center mt-6">
          <FiSearch className="w-24 h-24 text-gray-300 mb-4 animate-bounce" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No Products Found</h3>
          <p className="text-gray-500 text-center max-w-xs">
            Sorry, we couldn't find any products matching your search. Try adjusting your filters or search terms.
          </p>
          <button
          onClick={resetFilters}
            className="mt-6 px-6 py-2 
                        bg-blue-500 text-white 
                        rounded-lg hover:bg-blue-600 transition"
          >
            Reset Filters
          </button>
        </div>
      }
    </div>
  );
};

export default Shop;
