import React from "react";

export default function Hero() {
  return (
   <div className="flex flex-col sm:flex-row items-center bg-black text-white gap-10 px-16 py-6 sm:p-10  mb-2 sm:items-center  min-h-screen">

      <div className="informartion sm:w-1/2">
        <h5 className="text-2xl font-semibold">Hey,folk</h5>
        <div className="name ">
          <h1 className="font-azonix text-5xl animate-typewriter font-bold">food that makes you happy</h1>
        </div>
        <div className="aboutme animate-typewriter">
          This is a modern food ordering platform that lets users browse
          restaurants, explore menus, and place orders online with ease. Fast
          delivery, real-time tracking, and a user-friendly experience await
          you!
        </div>

        <div className="buttons gap-3">
          <button className="border px-3 m-3 py-2 bg-black hover:bg-slate-200 hover:text-black  duration-300 ">
            CONTACT US
          </button>
      
        </div>
      </div>
     <div className="img w-1/2 overflow-hidden">
  <img
    className="h-auto w-full object-cover rounded-md"
    src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"
    alt="no img"
  />
</div>

    </div>
  );
}
