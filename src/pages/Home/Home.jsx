import { useContext } from "react";
import { GlobalContext } from "../../context/input";
import RecipeItem from "../../components/recipeList.jsx/RecipeItem";

function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading)
    return (
      <div className="text-2xl font-bold text-center my-32">
        <span>Loading..! Please wait</span>
      </div>
    );

  return (
    <div className="container mx-auto flex flex-wrap justify-center gap-10 py-8 shadow-2xl">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div className="flex flex-col items-center">
          <div>
            <img
              className="h-96 w-full"
              src="https://r2.erweima.ai/imgcompressed/compressed_9cb4e31b25df5310c1530304716a09a4.webp"
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
