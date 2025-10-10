import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const ProductDetails = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      const allProducts = [
        {
          id: 1,
          name: "White Wholes 180",
          price: 950,
          image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759933603/White_Wholes_180_oajppn.png",
          category: "cashew",
          description:
            "Premium grade cashew nuts with large whole kernels (180 count). Perfect for gifting, roasting, or snacking. Rich, creamy texture and mildly sweet taste."
        },
        {
          id: 2,
          name: "White Wholes 240",
          price: 880,
          image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759933603/White_Wholes_180_oajppn.png",
          category: "cashew",
          description:
            "Delicious whole cashews with uniform size and bright white color. Ideal for cooking, sweets, or healthy munching."
        },
        {
          id: 3,
          name: "Scorched Wholes 240",
          price: 820,
          image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759933603/White_Wholes_180_oajppn.png",
          category: "cashew",
          description:
            "Lightly scorched cashews that retain the same flavor and crunch. Great value option for bulk use in snacks and bakery products."
        },
        {
          id: 4,
          name: "Split Cashew 2P",
          price: 760,
          image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759933603/White_Wholes_180_oajppn.png",
          category: "cashew",
          description:
            "Cashew halves with a natural taste and fresh aroma. Perfect for sweets like kaju katli, laddus, and cooking curries."
        },
        {
          id: 5,
          name: "Cashew Pieces 8",
          price: 640,
          image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759933603/White_Wholes_180_oajppn.png",
          category: "cashew",
          description:
            "Small broken cashew pieces suitable for bakery, confectionery, and cooking. Same premium quality with a budget-friendly price."
        },
        {
          id: 6,
          name: "California Almonds",
          price: 750,
          image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934357/California_Almonds_nbfz4m.png",
          category: "almond",
          description:
            "High-quality almonds from California, known for their crunchy texture and nutty flavor. Excellent for daily snacking or soaking overnight."
        },
        {
          id: 7,
          name: "Iran Almonds",
          price: 680,
          image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934357/California_Almonds_nbfz4m.png",
          category: "almond",
          description:
            "Naturally sweet almonds from Iran, softer in texture and rich in essential nutrients. Ideal for desserts and traditional sweets."
        },
        {
          id: 8,
          name: "Gurbandi Almonds",
          price: 890,
          image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934357/California_Almonds_nbfz4m.png",
          category: "almond",
          description:
            "Smaller in size but packed with nutrients and natural oils. Commonly used in Ayurvedic tonics and energy drinks."
        },
        {
          id: 9,
          name: "Mamra Almonds",
          price: 1250,
          image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934357/California_Almonds_nbfz4m.png",
          category: "almond",
          description:
            "Premium variety from Iran and Afghanistan. Rich in natural oil, crunchy, and considered the healthiest almond type."
        },
        {
          id: 10,
          name: "Roasted Salted Almonds",
          price: 940,
          image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934357/California_Almonds_nbfz4m.png",
          category: "almond",
          description:
            "Crispy roasted almonds with a pinch of Himalayan salt. A perfect savory snack for health-conscious people."
        },
        {
          id: 11,
          name: "Black Pepper Bold",
          price: 720,
          image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934570/Black_Pepper_Bold_vsyvo3.png",
          category: "pepper",
          description:
            "Hand-picked bold black peppercorns with strong aroma and sharp taste. Great for seasoning and daily cooking."
        },
        {
          id: 12,
          name: "Black Pepper MG1",
          price: 780,
          image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934570/Black_Pepper_Bold_vsyvo3.png",
          category: "pepper",
          description:
            "Top-grade MG1 pepper from Kerala with rich flavor and intense spiciness. Widely used in spice blends and export quality."
        },
        {
          id: 13,
          name: "Black Pepper 500G/L",
          price: 690,
          image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934570/Black_Pepper_Bold_vsyvo3.png",
          category: "pepper",
          description:
            "Medium-size peppercorns with strong aroma and fresh taste. Ideal for grinding into pepper powder."
        },
        {
          id: 14,
          name: "White Pepper",
          price: 980,
          image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934570/Black_Pepper_Bold_vsyvo3.png",
          category: "pepper",
          description:
            "Delicate and mild pepper flavor, preferred in soups and light-colored sauces. Made from the ripe berries of black pepper."
        },
        {
          id: 15,
          name: "Ground Pepper Powder",
          price: 560,
          image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934570/Black_Pepper_Bold_vsyvo3.png",
          category: "pepper",
          description:
            "Freshly ground black pepper powder. Adds a spicy kick and aroma to curries, soups, and marinades."
        },
        {
          id: 16,
          name: "Green Cardamom 6mm",
          price: 1250,
          image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934649/Green_Cardamom_swbgy0.png",
          category: "ilachi",
          description:
            "Fragrant small-sized cardamom pods with strong flavor. Ideal for tea, sweets, and daily use."
        },
        {
          id: 17,
          name: "Green Cardamom 7mm",
          price: 1420,
          image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934649/Green_Cardamom_swbgy0.png",
          category: "ilachi",
          description:
            "Medium-sized cardamom with perfect aroma and color. Used in biryani, desserts, and premium spice blends."
        },
        {
          id: 18,
          name: "Green Cardamom 8mm",
          price: 1650,
          image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934649/Green_Cardamom_swbgy0.png",
          category: "ilachi",
          description:
            "Large, bold cardamom pods with rich fragrance and full flavor. Export-quality spice for special dishes."
        },
        {
          id: 19,
          name: "Bold Green Cardamom",
          price: 1850,
          image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934649/Green_Cardamom_swbgy0.png",
          category: "ilachi",
          description:
            "Top-grade large cardamom used for royal dishes, sweets, and aromatic beverages. Known for its long-lasting freshness."
        },
        {
          id: 20,
          name: "Broken Cardamom",
          price: 1050,
          image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934649/Green_Cardamom_swbgy0.png",
          category: "ilachi",
          description:
            "Cracked cardamom pods with the same aroma and taste. Economical option for tea masala and cooking."
        },
        {
          id: 21,
          name: "Ceylon Cinnamon Sticks",
          price: 780,
          image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934647/Ceylon_Cinnamon_yztrpj.png",
          category: "cinnamon",
          description:
            "Premium Ceylon cinnamon with a mild, sweet aroma. Ideal for desserts, beverages, and herbal teas."
        },
        {
          id: 22,
          name: "Cassia Cinnamon",
          price: 640,
          image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934647/Ceylon_Cinnamon_yztrpj.png",
          category: "cinnamon",
          description:
            "Strong-flavored cassia bark used widely in Indian cooking. Perfect for curries, biryanis, and gravies."
        },
        {
          id: 23,
          name: "Cinnamon Powder",
          price: 590,
          image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934647/Ceylon_Cinnamon_yztrpj.png",
          category: "cinnamon",
          description:
            "Finely ground cinnamon powder ready for use in cakes, teas, and health drinks. Fresh aroma and sweet-spicy flavor."
        },
        {
          id: 24,
          name: "Cinnamon Chips",
          price: 670,
          image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934647/Ceylon_Cinnamon_yztrpj.png",
          category: "cinnamon",
          description:
            "Small cinnamon bark chips, perfect for tea blends, decoctions, or slow cooking."
        },
        {
          id: 25,
          name: "Cinnamon Bark",
          price: 710,
          image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759934647/Ceylon_Cinnamon_yztrpj.png",
          category: "cinnamon",
          description:
            "Natural cinnamon bark with a rich woody aroma. Adds warmth and depth to any recipe."
        },
        {
          id: 26,
          name: "Whole Cloves",
          price: 880,
          image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759935062/Whole_Cloves_w4q0e7.png",
          category: "clove",
          description:
            "Whole dried cloves with intense aroma. Great for spice mixes, teas, and pickles."
        },
        {
          id: 27,
          name: "Zanzibar Cloves",
          price: 940,
          image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759935062/Whole_Cloves_w4q0e7.png",
          category: "clove",
          description:
            "Premium cloves from Zanzibar with rich oil content and strong flavor. Ideal for culinary and medicinal uses."
        },
        {
          id: 28,
          name: "Sri Lankan Cloves",
          price: 1020,
          image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759935062/Whole_Cloves_w4q0e7.png",
          category: "clove",
          description:
            "Finest Sri Lankan cloves known for aroma and freshness. Perfect for curries and spice blends."
        },
        {
          id: 29,
          name: "Clove Powder",
          price: 740,
          image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759935062/Whole_Cloves_w4q0e7.png",
          category: "clove",
          description:
            "Finely ground clove powder. Adds a warm, spicy kick to masala teas, sweets, and gravies."
        },
        {
          id: 30,
          name: "Broken Cloves",
          price: 660,
          image: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759935062/Whole_Cloves_w4q0e7.png",
          category: "clove",
          description:
            "Broken cloves with the same rich aroma and taste. A budget-friendly choice for everyday cooking."
        },
      ];

      const prod = allProducts.find(p => p.id === parseInt(id));
      setProduct(prod);
    };
    fetchProduct();
  }, [id]);



  const existingCartItem = product
    ? cartItems.find(item => item.id === product.id)
    : null;

  useEffect(() => {
    if (existingCartItem) {
      setQty(existingCartItem.qty);
    }
  }, [existingCartItem]);

  const handleAddToCart = () => {
    setCartItems([...cartItems, { ...product, qty }])
  }

  const handleRemove = () => {
    setCartItems(cartItems.filter(item => item.id !== Number(id)));
    setQty(1);
  }

  const handleBuyNow = () => {
    existingCartItem ? navigate('/cart') : setCartItems([...cartItems, { ...product, qty }], navigate('/cart'))
  }

  const handleIncrement = () => {
    const newQty = qty + 1;
    setQty(newQty);

    setCartItems(
      cartItems.map((item) =>
        item.id === product.id ? { ...item, qty: newQty } : item
      )
    );
  };

  const handleDecrement = () => {
    const newQty = qty - 1;

    if (newQty <= 0) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setQty(newQty);
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, qty: newQty } : item
        )
      );
    }
  };

  const handleGotoCart = () => {
    navigate('/cart');
  }

  if (!product) return <p className="text-center mt-8">Loading...</p>;

  return (
    <div className="max-w-[90%] mx-auto py-8 flex flex-col md:flex-row gap-8">
      <div className="md:w-1/4">
        <img src={product.image} alt={product.name} className="h-56 rounded" />
      </div>
      <div className="md:w-1/2 flex flex-col gap-4">
        <h2 className="text-3xl font-bold">{product.name}</h2>
        <p className="text-2xl text-blue-600 font-semibold">₹ {product.price}</p>
        <p className="text-gray-700">{product.description}</p>
        <div className="flex flex-col items-start justify-center gap-3 mt-4">
          {existingCartItem ? (
            <div className="flex flex-col items-center gap-3">
              <div className="flex gap-3 w-full">
                <button
                  onClick={handleRemove}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition w-32 text-sm font-medium"
                >
                  Remove
                </button>
                <div className="flex items-center justify-center bg-gray-100 rounded-full px-4 py-2 shadow-sm">
                  <button
                    onClick={handleDecrement}
                    className="text-gray-600 hover:text-red-500 transition"
                  >
                    <CiCircleMinus className="text-2xl" />
                  </button>
                  <span className="w-8 text-center font-semibold text-gray-800">
                    {qty}
                  </span>
                  <button
                    onClick={handleIncrement}
                    className="text-gray-600 hover:text-green-600 transition"
                  >
                    <CiCirclePlus className="text-2xl" />
                  </button>
                </div>
              </div>
              <div className="flex gap-3 w-full justify-center">
                <button
                  onClick={handleGotoCart}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-32 text-sm font-medium"
                >
                  Go to Cart
                </button>
                <button
                  onClick={handleBuyNow}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition w-32 text-sm font-medium"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ) : (
            <div className="flex gap-3 w-full">
              <button
                onClick={handleAddToCart}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-32 text-sm font-medium"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition w-32 text-sm font-medium"
              >
                Buy Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
