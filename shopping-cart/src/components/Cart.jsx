import React, { useState } from "react";
import { deleteItem, updateItem } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  // Fetching items from store
  let items = useSelector((state) => state.items);
  items = items.filter((item) => Object.keys(item).length !== 0);
  
  const dispatch = useDispatch();
  
  const [newName, setNewName] = useState("")
  const [isEditable, setIsEditable] = useState(false)
  const [editableItemId, setEditableItemId] = useState(null);

  const update = (id) => {
    dispatch(updateItem({id: id, name: newName}))
    setNewName("")
    setIsEditable(false)
  }

  const handleUpdate = (id, name) => {
    if (isEditable && editableItemId === id) {
        dispatch(updateItem({ id, name: newName }));
        setNewName("");
        setIsEditable(false);
      } else {
        setNewName(name)
        setIsEditable(true)
        setEditableItemId(id)
      }
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-md shadow-md p-4">
            {isEditable && editableItemId === item.id ? 
                (
                    <input 
                        type="text" 
                        value={newName} 
                        onChange={(e) => setNewName(e.target.value)} 
                        className="border border-gray-300 px-3 py-2 text-lg font-semibold rounded-md w-full mb-2"
                    />
                ) : 
                (
                    <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                )}
            <p className="text-gray-600">Quantity: {item.quantity}</p>

            {/* Update item name button */}
              <button 
                className={`text-white px-4 py-2 mr-3 rounded-md ${isEditable && editableItemId === item.id ? 'bg-green-500' : 'bg-blue-500'}`}
                onClick={() => handleUpdate(item.id, item.name)}
              >
                {isEditable && editableItemId === item.id ? 'Save' : 'Update'}
              </button>

            {/* Delete button */}
            <button
              onClick={() => dispatch(deleteItem(item.id))}
              className="bg-red-500 text-white px-4 py-2 rounded-md mt-2"
            >
              Delete
            </button>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
