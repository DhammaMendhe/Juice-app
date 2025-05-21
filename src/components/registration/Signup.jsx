import React from "react";

export default function Signup() {
  return (
    <div>
      <div>
        <h1>information </h1>
      </div>
      <div className="w-1/2">
        <form action="">
          <label className="block" htmlFor="text">
            {" "}
            name
          </label>
          <input className="border p-1" />
          <label className="block" htmlFor="text">
            {" "}
            name
          </label>

          <input className="border p-1" />
          <label className="block" htmlFor="text">
            {" "}
            name
          </label>

          <input className="border p-1" />
          <button className="border block text-gray-950 bg-slate-400 px-4 py-2 rounded-sm">submit</button>
        </form>
      </div>
    </div>
  );
}
