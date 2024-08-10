import { useContext } from "react";
import { GlobalContext } from "../../context/input";
import RecipeItem from "../../components/recipeList.jsx/RecipeItem";

function Favorites() {
  const { favoriteList } = useContext(GlobalContext);

  return (
    <div className="container mx-auto flex flex-wrap justify-center gap-10 py-8 shadow-2xl">
      {favoriteList.length > 0 ? (
        favoriteList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div className="h-96 flex flex-col items-center mt-12">
          <div className="my-12">
            <p className="text-xl md:text-4xl font-extrabold text-gray-800 text-center">
              No Favorite Food Is Added
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Favorites;
