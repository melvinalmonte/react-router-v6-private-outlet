import React from "react";
import { Link } from "react-router-dom";
import { useProxy } from "valtio/utils";
import authStore from "../../store";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isAuth, logout, login } = useProxy(authStore);
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="block h-8 w-auto lg:hidden"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
              <img
                className="hidden h-8 w-auto lg:block"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className={`rounded-md px-3 py-2 text-sm font-medium text-white`}
                  aria-current="page"
                >
                  Home
                </Link>
                {isAuth && (
                  <>
                    <Link
                      to="foo"
                      className={`rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
                    >
                      Foo
                    </Link>

                    <Link
                      to="bar"
                      className={`rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
                    >
                      Bar
                    </Link>
                  </>
                )}

                <div className="flex items-center">
                  <input
                    id="authorized"
                    name="authorized"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    onChange={(evt) =>
                      evt.currentTarget.checked ? login() : logout()
                    }
                    checked={isAuth}
                  />
                  <label
                    htmlFor="authorized"
                    className="ml-2 block text-sm text-gray-300"
                  >
                    Authorized
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative">
              <div>
                <button
                  type="button"
                  className={`${
                    isAuth ? "bg-green-700" : "bg-red-700"
                  } rounded-md py-2 px-4  text-sm text-white focus:ring-offset-gray-800`}
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  {isAuth ? <p>Logged in</p> : <p>Logged out</p>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link
              to="/"
              className={`  block rounded-md  px-3 py-2 text-base font-medium text-white`}
              aria-current="page"
            >
              Home
            </Link>
            {isAuth && (
              <>
                <Link
                  to="foo"
                  className={`block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
                >
                  Foo
                </Link>

                <Link
                  to="bar"
                  className={`block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
                >
                  Bar
                </Link>
              </>
            )}

            <div className="flex items-center px-3 py-2">
              <input
                id="authorized"
                name="authorized"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                onChange={(evt) =>
                  evt.currentTarget.checked ? login() : logout()
                }
                checked={isAuth}
              />
              <label
                htmlFor="authorized"
                className="ml-2 block text-sm text-gray-300"
              >
                Authorized
              </label>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
