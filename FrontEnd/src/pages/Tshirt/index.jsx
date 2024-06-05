import React from 'react'
import { Link, NavLink } from "react-router-dom";
const index = () => {
  return (
    <div>This is Tshirts Page having few tshirt
<ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
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
                  Basic Tshirt
                </NavLink>
              </li>
              </ul>
      
    </div>
  )
}

export default index