import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function RecipeItem({ item }) {
  return (
    <div className="flex flex-col  w-80 p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white overflow-hidden">
      <div className="flex justify-center items-center h-40  rounded-xl overflow-hidden">
        <img src={item.image_url} alt={item.title} className="block w-full" />
      </div>
      <div>
        <span className="text-gray-700 text-sm font-medium">
          {item.publisher}
        </span>
        <h1 className="text-xl font-bold text-black">{item.title}</h1>
        <Link
          to={`/recipe-item/${item.id}`}
          className="text-sm mt-5 p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block bg-gray-900 hover:bg-gray-800 text-white"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
}

export default RecipeItem;
