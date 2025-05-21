import React, { useRef, useState } from "react";

// function MyInput({ ref }) {
//   return <input className="border" ref={ref} />;
// }

export default function Contact() {

 const [something, setsomething] = useState(null);




  const myref = useRef(null);
  const handleclick = () => {
    myref.current.focus();
  };

  return (
    <div >
     <h1 className="text-center font-bold">CONTACT US</h1>
    <div className="flex flex-row flex-grow gap-5">
        <div>
        <h1>this is heading</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          repellendus quasi quas, ratione cumque voluptas? Reiciendis ab
          inventore, commodi modi repellendus suscipit?
        </p>
      </div>
      <div className="w-1/2">
        <label className="block" htmlFor="text"> name</label>
        <input className="border p-1" ref={myref} />
        <label className="block" htmlFor="text"> name</label>

        <input className="border p-1" ref={myref} />
        <label className="block" htmlFor="text"> name</label>

        <input className="border p-1" ref={myref} />

        <div>
          <label className="block" htmlFor="text"> name</label>

          <textarea
            className="border"
            id="w3review"
            name="w3review"
            rows="4"
            cols="40"
          ></textarea>
        </div>
        <button onClick={handleclick}>submit</button>
      </div>
    </div>
    </div>
  );
}
