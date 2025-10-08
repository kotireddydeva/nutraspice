import { Link } from "react-router-dom";

const Categories = () => {
  const categoriesData = [
    { name: "Cashew", id:"cashew", hoverColor: "hover:bg-indigo-200", imgUrl: 'https://res.cloudinary.com/dyz8l9er0/image/upload/v1759926017/cashew_nut_cso3ca.png' },
    { name: "Almond", id:"almond", hoverColor: "hover:bg-green-200", imgUrl: 'https://res.cloudinary.com/dyz8l9er0/image/upload/v1759926657/almond_qaddl9.png'  },
    { name: "Pepper", id:"pepper", hoverColor: "hover:bg-red-200", imgUrl: 'https://res.cloudinary.com/dyz8l9er0/image/upload/v1759926557/pepper_icon_fxcsop.png'  },
    { name: "Ilachi", id:"ilachi", hoverColor: "hover:bg-yellow-200", imgUrl: 'https://res.cloudinary.com/dyz8l9er0/image/upload/v1759926561/cardamom_xib7pk.png'  },
    { name: "Cinnamon", id:"cinnamon", hoverColor: "hover:bg-orange-200", imgUrl: 'https://res.cloudinary.com/dyz8l9er0/image/upload/v1759926565/cinnamon_qdwlna.png'  },
    { name: "Clove", id:"clove", hoverColor: "hover:bg-purple-200", imgUrl: 'https://res.cloudinary.com/dyz8l9er0/image/upload/v1759926565/clove_icon_wsjnkv.png'  },
  ];

  return (
    <div className="max-w-[90%] mx-auto my-10">
      <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categoriesData.map((item) => (
          <Link to={`/category/${item.id}`} key={item.name}>
          <div
            className={`
              group bg-white rounded-2xl p-2 py-10 text-center
              border-2 border-gray-200 shadow-md
              transition-all duration-500 ease-in-out
              ${item.hoverColor} cursor-pointer hover:shadow-lg
            `}
          >
            <div
              className="
                bg-white mx-auto w-24 h-24 border-2 border-gray-200
                rounded-full flex items-center justify-center
                transition-all duration-500 ease-in-out
                hover:border-white
              "
            >
              <img className="group-hover:scale-125 duration-500" src={item.imgUrl} alt={item.name} />
            </div>
            <button className="mt-3 font-bold">Shop Now</button>
            
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
