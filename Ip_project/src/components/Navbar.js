import { NavLink, useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsLeftRight } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from "react";
import loginContextImport from "../context/login/loginContext";
import userContextImport from "../context/user/userContext";
import axios from "axios";

const Navbar = ({
  searchHandler,
  searchQuery,
  setSearchQuery,
  inputField,
  savedItems,
}) => {
  // manupulating nav active class
  const navigate = useNavigate();
  const navActive = ({ isActive }) => {
    return {
      color: isActive ? "#f43f5e" : null,
    };
  };
  const loginContext = useContext(loginContextImport);
  const userContext = useContext(userContextImport);
  // const [loginToggle, setLoginToggle] = useState(true);

  const handleClick = (e)=>{
    navigate('/')
  }

  const handleLogOut = async (e)=>{
    e.preventDefault();
    axios.get("http://localhost:5000/api/auth/logout");
    loginContext.setLoggedIn(false);
    userContext.setUser({
      name: "",
      username: ""
    })
    navigate('/');
    // window.location.reload(true);
  }


  return (
    <div className="navbar flex justify-between items-center container mx-auto py-8 flex-col lg:flex-row gap-5 lg:gap-0">
      <Link to={'/'}><h2 className="logo text-2xl font-bold  italic">
      Vidhi&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowsLeftRight} beat size="sm" style={{color: "#f43f50",}} />&nbsp;Vyanjan
      </h2></Link>
      <form className="search-bar" onSubmit={searchHandler}>
        <input
          ref={inputField}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="search"
          placeholder="Search recipe..."
          required
          className="bg-white/75 p-3 px-8 lg:w-96 rounded-full outline-none shadow-lg shadow-rose-100 focus:shadow-rose-200 duration-300"
        />
      </form>
      <ul className="menu flex gap-5">
        <li>
        <NavLink
            style={navActive}
            end
            to="/"
            className="text-gray-400 hover:text-gray-600 duration-300"
            onClick={handleClick}
          >
            Home
          </NavLink>
        </li>

        <li>
        <NavLink
            style={navActive}
            end
            to="/Blogs"
            className="text-gray-400 hover:text-gray-600 duration-300"
            
          >
            Blogs
          </NavLink>
        </li>
        
        <li>
          <NavLink
            style={navActive}
            to="/favourites"
            className="text-gray-400 hover:text-gray-600 duration-300"
          >
            Favourites
            <span className="favourites-count font-bold text-sky-400">
              ({savedItems.length})
            </span>
          </NavLink>
        </li>
        <li>
          {loginContext.loggedIn ? <NavLink
            style={navActive}
            end
            to="/"
            className="text-gray-400 hover:text-gray-600 duration-300"
            onClick={handleLogOut}
          >
            Logout
          </NavLink> :
          <NavLink
            style={navActive}
            end
            to="/Login"
            className="text-gray-400 hover:text-gray-600 duration-300"
          >
            Login
          </NavLink>}
        </li>

      </ul>
    </div>
  );
};

export default Navbar;
