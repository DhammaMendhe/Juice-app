import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

export default function Products() {
  // const [apidata, setapidata] = useState([]);
  // const [searchItem, setsearchItem] = useState("");
  // const url = "http://localhost:3000/api/foods";

  // const filteringItems = apidata.filter(
  //   (item) =>
  //     item.name.toLowerCase().includes(searchItem.toLowerCase()) ||
  //     item.description.toLowerCase().includes(searchItem.toLowerCase())
  // );

  // const fetchApi = async () => {
  //   try {
  //     const response = await fetch(url, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const data = await response.json();
  //     setapidata(data || []);
  //     // console.log(data);
  //   } catch (error) {
  //     console.log("error fetching data");
  //   }
  // };

  // useEffect(() => {
  //   fetchApi();
  // }, []);

  return (
    <div className="flex border gap-3">
      {/* <div className="firstone border overflow-auto   w-1/5">
        <h1>Filter</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search meals..."
            className="p-2 w-full max-w-md border rounded"
            value={searchItem}
            onChange={(e) => setsearchItem(e.target.value)}
          />
        </div>
      </div>

<div className="rightSideContainer flex flex-col">
    <div className="searches block ">we found { filteringItems.length}from {apidata.length}</div>
     
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 ">
  {(searchItem ? filteringItems : apidata).map((meal) => (
    <ProductItem
      key={meal.id}
      heading={meal.name}
      imgUrl={meal.image}
      desc={meal.description}
      receipe={meal.receipe.slice(0,50)}
    />
  ))}
</div>
</div> */}
    </div>
  );
}
