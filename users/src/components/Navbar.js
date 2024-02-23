import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "./ProfileMenue";
import AddPropertyModal from "./AddPropertyModal";
import useAuthCheck from "../hooks/useAuthCheck";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const { validateLogin } = useAuthCheck();

//check if user is valid when addpropety is clicked
  const handleAddPropertyClick = () => {
    if (validateLogin()) {
      setModalOpened(true);
    }
  };

  return (
    <div>
      <nav className="bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex"> 
                <span>
                <h1 className="text-orange-600 font-medium font-roboto   text-2xl">HOME MALL</h1>
                <p className="text-black font-medium font-roboto pl-4">house to let</p>
                </span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/"
                    className="pl-44 hover:text-orange-500 text-black px-3 py-2 rounded-md text-sm font-poppins font-medium"
                  >
                    Home
                  </Link>

                  <NavLink
                    to="/properties"
                    className="text-black hover:text-orange-500  px-3 py-2 rounded-md text-sm font-poppins font-medium"
                  >
                    For Rent
                  </NavLink>
                  <NavLink
                    to=""
                    className="text-black hover:text-orange-500  px-3 py-2 rounded-md text-sm font-poppins font-medium"
                  >
                    For Sale
                  </NavLink>

                  <a
                    href="#"
                    className="text-black hover:text-orange-500  px-3 py-2 rounded-md text-sm font-poppins font-medium"
                  >
                    Contact
                  </a>

                  <div
                    onClick={handleAddPropertyClick}
                    className="text-black  hover:text-orange-500  px-3 py-2 rounded-md text-sm font-poppins font-medium"
                  >
                    + List Property
                  </div>{'\u00a0'} {'\u00a0'} {'\u00a0'} {'\u00a0'} {'\u00a0'} {'\u00a0'} {'\u00a0'} {'\u00a0'} {'\u00a0'} {'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}{'\u00a0'}
                  <AddPropertyModal opened={modalOpened} setOpened={setModalOpened} />
                  {/* login modal */}
                  {!isAuthenticated ? (
                  <button type="button" onClick={loginWithRedirect} className=" outline-orange-500 mt-4  py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-orange-500 rounded-lg border border-orange-600 hover:bg-orange-500 hover:text-white focus:z-10 focus:ring-4 focus:ring-orange-300 dark:focus:ring-red-400 dark:bg-orange-600  dark:text-black
                   dark:border-gray-600 dark:hover:text-white dark:hover:bg-orange-600">Login</button>
                   ) : (
                    <ProfileMenu user={user} logout={logout} />
                  )}
                   
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
          {/* links for small screen */}
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/"
                  className="hover:bg-orange-600 text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>

                <NavLink
                  to="/properties"
                  className="text-black hover:bg-orange-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  For Rent
                </NavLink>

                <a
                  href="#"
                  className="text-black hover:bg-orange-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </a>

                <div
                  onClick={handleAddPropertyClick}
                  className="text-black hover:bg-orange-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  + List Property
                </div>
                <AddPropertyModal opened={modalOpened} setOpened={setModalOpened} />
                  {/* login modal */}
                  {!isAuthenticated ? (
                  <button type="button" onClick={loginWithRedirect} className=" outline-orange-500  py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-orange-500 rounded-lg border border-orange-600 hover:bg-orange-500 hover:text-white focus:z-10 focus:ring-4 focus:ring-orange-300 dark:focus:ring-red-400 dark:bg-orange-600  dark:text-black
                   dark:border-gray-600 dark:hover:text-white dark:hover:bg-orange-600">Login</button>
                   ) : (
                    <ProfileMenu user={user} logout={logout} />
                  )}
              </div>
            </div>
          )}
        </Transition>
      </nav>

    </div>
  );
}

export default Navbar;
