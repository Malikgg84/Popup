import React, { useState } from "react";
import shoe from "/shoe.webp";
import { Link, NavLink, useLocation } from "react-router-dom";
import Popup from "./Popup";
// import { Link } from 'react-router'
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation().pathname;
  return (
    <header className="flex items-center justify-between px-6 shadow-md md:px-12">
      <img className="w-[80px]" src={shoe} alt="shoe" />
      <ul className="-mt-2 flex gap-8 py-4">
        {/* There are Three ways to give styling according to page first using NavLink and second using the location pathname  */}
        <li>
          <NavLink
            className="[&.active]:text-red-600 [&.active]:underline"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          {/* in NavLink we use callback function and that value store in classname which we are returning 
          in this case isActive is only True at that time when we present in this Link age */}
          <NavLink
            className={({ isActive }) => {
              if (isActive) {
                return "text-red-600 underline";
              }
            }}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <Link
            style={
              location == "/contact"
                ? { color: "red", textDecoration: "underline" }
                : {}
            }
            to="/contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Sign In
          </button>
          <Popup
            footer={
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="rounded-md bg-gray-300 px-6 py-2 font-semibold hover:bg-gray-400/80 active:bg-gray-400/60"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="rounded-md bg-blue-300 px-6 py-2 font-semibold hover:bg-blue-400/80 active:bg-blue-400/60"
                >
                  Sign In
                </button>
              </div>
            }
            header={<div className="text-xl font-bold">Sign In</div>}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          >
            <div className="-mx-4 my-3 flex flex-wrap gap-4 border-y px-4 py-4">
              <input
                placeholder="Username"
                className="grow rounded border border-gray-600 px-2 py-1"
                type="text"
              />
              <input
                placeholder="Password"
                className="grow rounded border border-gray-600 px-2 py-1"
                type="password"
              />
            </div>
          </Popup>
        </li>
      </ul>
    </header>
  );
}
