import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../context/input";

function NavBar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  console.log(searchParam);

  const ActiveLink = ({ isActive }) =>
    isActive
      ? "bg-gray-800 text-white rounded-md px-3 py-2"
      : "hover:bg-gray-600 hover:text-white rounded-md px-3 py-2";

  return (
    <nav className="flex justify-between items-center container mx-auto p-8 flex-col lg:flex-row gap-5">
      <h1 className="text-2xl font-bold text-gray-800">
        <NavLink className="hover:text-gray-800 duration-300" to={"/"}>
          Food Recipe
        </NavLink>
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          placeholder="Enter food item to get recipes..."
          className="bg-white/75 py-3 px-8 rounded-full outline-none border border-gray-100 w-80 lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
        />
      </form>
      <ul className="flex gap-5 text-lg font-semibold text-gray-500 cursor-pointer mt-2 ">
        <li className="hover:text-gray-800 duration-300">
          <NavLink to={"/"} className={ActiveLink}>
            Home
          </NavLink>
        </li>

        <li className="hover:text-gray-800 duration-300">
          <NavLink to={"/favorites"} className={ActiveLink}>
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
