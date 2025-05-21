import React from "react";

export default function ProductItem(props) {
  return (
    <div className="max-w-sm bgte rounded-2xl shadow-md overflow-hidden m-4">
      <div className="w-full h-48 overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={props.imgUrl}
          alt={props.heading}
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {props.heading}
        </h2>
        <p className="text-gray-600 mb-2">{props.desc}</p>
        <h3 className="text-lg font-medium text-gray-700 mb-1">Recipe:</h3>
        <p className="text-gray-600">{props.receipe}.... <a className="text-blue-500" href="">Read more</a></p>
      </div>
    </div>
  );
}
