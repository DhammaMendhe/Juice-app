import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const [fung,setfung] =useState(0);


  const handleThis = ()=>{
    setfung(400);
    console.log("this is green",fung)
  }

  const handleRemove  =()=>{
    setfung(500);
    console.log("this is green",fung)
  }

  
  return (
    <div
      className="p-3"    >
      <h1 className={`font-bold ${fung == 500 ? "bg-slate-400 ":"bg-slate-200 "} animate-bounce`} >Lorem, ipsum dolor.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum expedita
        nam beatae esse architecto! Veritatis fugiat, non nulla repudiandae
        harum ex maxime consequatur adipisci alias praesentium in blanditiis
        odio quam eius ea cumque!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum expedita
        nam beatae esse architecto! Veritatis fugiat, non nulla repudiandae
        harum ex maxime consequatur adipisci alias praesentium in blanditiis
        odio quam eius ea cumque!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum expedita
        nam beatae esse architecto! Veritatis fugiat, non nulla repudiandae
        harum ex maxime consequatur adipisci alias praesentium in blanditiis
        odio quam eius ea cumque!
      </p>
<label class="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer"/>
  <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
  <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
</label>
      <button className="py-2 px-4 btn border border-fuchsia-500 hover:bg-slate-500 duration-150" onClick={handleThis}>click me</button>
      <button className="py-2 px-4 btn border border-fuchsia-500 hover:bg-slate-500 duration-150" onClick={handleRemove}>click me</button>
    </div>
  );
}
