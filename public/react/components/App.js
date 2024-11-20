import React, { useEffect, useState } from "react";
import apiURL from "../api";
import Items from "./Items";
import AddItemForm from "./AddItemForm";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`${apiURL}/items`);
      const data = await response.json();
      if (Array.isArray(data)) {
        setItems(data);
      } else {
        console.error("Fetched data is not an array:", data);
      }
    };
    fetchItems();
  }, []);

  // Function to delete an item
  const deleteItem = async (id) => {
    try {
      const response = await fetch(`${apiURL}/items/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Fetch updated items after deletion
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
      } else {
        console.error("Failed to delete item");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <h1 className="title">Inventory App</h1>
      <Items items={items} deleteItem={deleteItem} />
      <AddItemForm />
    </>
  );
}

export default App;
