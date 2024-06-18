import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useStateContext } from "../contexts/contextprovider";
import { useNavigate } from 'react-router-dom';
import axiosClient from "../axiosClient";

export default function Header() {
  const { user, token, setUser, setToken } = useStateContext();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onLogout = (e) => {
    e.preventDefault();
    axiosClient.get('/logout')
    .then(({}) => {
       setUser(null)
       setToken(null)
        navigate('/signin')
    })
    useEffect(() => {
      axiosClient.get('/user')
        .then(({data}) => {
           setUser(data)
        })
    }, [])
    
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src="/p2p.png" className="mr-3 h-12" alt="Logo" />
          </Link>
          <div className="flex items-center lg:order-2">
            {/* <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link> */}
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${
                                          isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${
                                          isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/tshirt/basic"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${
                                          isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Tshirt
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shoes"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${
                                          isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Shoes
                </NavLink>
              </li>
          
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${
                                          isActive
                                            ? "text-orange-700"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              {token ? (
                <div className="dropdown">
                  <button className="dropdown-toggle" onClick={toggleDropdown}>
                    {user.name} {user.id}
                  </button>
                  {isOpen && (
                    <ul className="dropdown-menu ">
                      <li>
                        <button onClick={onLogout}>Logout</button>
                      </li>
                    </ul>
                  )}
                </div>
              ) : (
                <li>
                  <NavLink
                    to="/signin"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                            ${
                              isActive ? "text-orange-700" : "text-gray-700"
                            } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Signin
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
