import FryingPan from "./FryingPan";
import Recipe from "./Recipe";
import Spinner from "./Spinner";
import { useContext } from "react";
import loginContextImport from "../context/login/loginContext";
import userContextImport from "../context/user/userContext";

const Home = ({ recipes, loading, error }) => {
  const loginContext = useContext(loginContextImport);
  const userContext = useContext(userContextImport);
  // console.log(loginContext.loggedIn);
  return (
    <div className="home container mx-auto py-10 flex flex-wrap gap-10 justify-center">
      {/* condition for ideal position */}
      {!loading && !error && recipes.length === 0 ? (
        <div>
          {loginContext.loggedIn ? 
          <p className="text-2xl lg:text-4xl font-semibold text-rose-300">
            Welcome! {userContext.user.name}, please search anything!
          </p> : 
          <p className="text-2xl lg:text-4xl font-semibold text-rose-300">
            Nothing to show, please search anything!
          </p>}
          <FryingPan />
        </div>
      ) : null}

      {/* condition for loading position */}
      {loading && <p>{error ? error : <Spinner />}</p>}

      {/* condition after getting the recipes */}
      {recipes?.length > 0 &&
        recipes.map((recipe) => <Recipe recipe={recipe} key={recipe.id} />)}
    </div>
  );
};

export default Home;
