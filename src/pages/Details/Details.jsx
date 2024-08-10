import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/input";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  console.log(id);

  const {
    recipeDetailsData,
    setRecipeDetailsData,
    favoriteList,
    handleAddToFavorite,
  } = useContext(GlobalContext);

  useEffect(() => {
    const getRecipeDetails = async () => {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();

      console.log(data);

      if (data?.data) {
        setRecipeDetailsData(data?.data);
      }
    };

    getRecipeDetails();
  }, []);

  console.log(recipeDetailsData);

  return (
    <div className="bg-white/75 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 rounded-lg p-10 shadow-lg shadow-gray-300">
      <div className="row-start-2 md:row-start-auto">
        <div className="h-96 overflow-hidden rounded-lg group">
          <img
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
            src={recipeDetailsData?.recipe?.image_url}
            alt={recipeDetailsData?.recipe?.title}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-gray-700 text-md font-medium">
          {recipeDetailsData?.recipe?.publisher}
        </span>
        <h1 className="text-xl font-bold text-black">
          {recipeDetailsData?.recipe?.title}
        </h1>
        <div>
          <button
            className="bg-red-500 text-white text-xl font-semibold uppercase tracking-wider px-4 py-2 rounded-lg mt-2 shadow-md hover:bg-red-600"
            onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
          >
            {favoriteList &&
            favoriteList.length > 0 &&
            favoriteList.findIndex(
              (item) => item.id === recipeDetailsData?.recipe?.id
            ) !== -1
              ? "Remove from favorite"
              : "Add to favorite"}
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-bold text-gray-800">Ingredients</span>
          <ul className="flex flex-col gap-3">
            {recipeDetailsData?.recipe?.ingredients.map((ingredient, index) => (
              <li key={index} className="text-xl font-semibold text-gray-700">
                <span>
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span>{ingredient.description}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-5">
          <p className="text-red-500 font-bold">
            Cooking Time :{" "}
            <span className="text-black">
              {recipeDetailsData?.recipe?.cooking_time}
            </span>
          </p>
          <p className="text-green-600 font-bold">
            Servings :{" "}
            <span className="text-black">
              {recipeDetailsData?.recipe?.servings}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Details;
