import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../firebase/Authprovider";

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);
  console.log(user?.photoURL);
  const signOut = () => {
    LogOut()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="bg-base-200 p-1">
      <div className="navbar max-w-[1180px]  mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl italic border-2 border-yellow-500 rounded-xl">
            Talkzy
          </a>
        </div>
        <div className="flex-none">
          {user ? (
            <>
              <div>
                <button
                  onClick={signOut}
                  className="btn mr-2 font-semibold bg-yellow-500 text-white"
                >
                  Log Out
                </button>
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
                  data-tip={user?.displayName}
                >
                  {user?.photoURL && (
                    <div className="w-10 rounded-full ">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={user?.photoURL}
                        className=""
                        data-reference="no-reference"
                      />
                    </div>
                  )}
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/find-tutors"}>Find tutors</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/add-tutorial"}>Add Tutorials</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/my-tutorial/${user.email}`}>
                      My Tutorials
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/my-booked"}>My booked tutors</NavLink>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div>
                <Link to={"/login"}>
                  <button className="btn mr-2 font-semibold bg-yellow-500 text-white">
                    LogIn
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
