import { Link } from "react-router-dom";

const Categories = () => {
  const categoriesData = [
    { name: "Cashew", id:"cashew", hoverColor: "hover:bg-indigo-200" },
    { name: "Almond", id:"almond", hoverColor: "hover:bg-green-200" },
    { name: "Pepper", id:"pepper", hoverColor: "hover:bg-red-200" },
    { name: "Ilachi", id:"ilachi", hoverColor: "hover:bg-yellow-200" },
    { name: "Cinnamon", id:"cinnamon", hoverColor: "hover:bg-orange-200" },
    { name: "Clove", id:"clove", hoverColor: "hover:bg-purple-200" },
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
                hover:border-white group-hover:text-2xl
              "
            >
              <h3 className="font-semibold text-black">{item.name}</h3>
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
