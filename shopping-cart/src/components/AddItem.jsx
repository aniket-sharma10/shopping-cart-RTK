import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

function AddItem() {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const add = (e) => {
    e.preventDefault();
    if(name.trim() !== ""){
        dispatch(addItem(name));
        setName("");
    }
  };

  return (
    <div className="container mt-8 mx-auto p-4">
      <h2 className="text-2xl font-bold mt-3 mb-2">Add Item</h2>
      <form onSubmit={add} className="flex justify-center">
        <div className="mb-2 flex p-2 rounded-lg w-full max-w-xl ">
          <input
            type="text"
            placeholder="Enter item name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 px-4 py-1 rounded-l-lg w-full"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-r-lg"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddItem;
