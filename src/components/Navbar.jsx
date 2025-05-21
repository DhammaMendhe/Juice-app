import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="sticky top-0  bg-slate-400 p-4 pb-5">
      <nav className=" flex justify-between  w-full">
        <div className="firstone flex gap-2">
          <div className="">
            <Link className="" to="/">
              Home
            </Link>
            |
          </div>
          <div>
            {" "}
            <Link className="" to="/about">
              About
            </Link>{" "}
            |{" "}
          </div>
          <div>
            {" "}
            <Link className="" to="/contact">
              Contact
            </Link>
            |{" "}
          </div>
          <div>
            {" "}
            <Link className="" to="/products">
              products 
            </Link>
          </div>

        </div>
        <div className="secondone flex gap-3">
            <div>
            <Link className="" to="/Login">
              login
            </Link>
            </div>
            <div>
            <Link className="" to="/signup ">
              signup
            </Link>
            </div>
        </div>
      </nav>
    </div>
  );
}
