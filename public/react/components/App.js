import React, { useEffect, useState } from "react";
import apiURL from "../api";
import AddItemForm from "./AddItemForm";

function App() {
  const [items, setItems] = useState([]);

  // Function to fetch items from the API
  const fetchItems = async () => {
    const response = await fetch(`${apiURL}/items`);
    const data = await response.json();
    setItems(data);
  }

  // useEffect to fetch items on component mount
  useEffect(() => {
    fetchItems();
  }, []);

  // Render the application
  return (
    <>
      <h1>Inventory App</h1>
      <AddItemForm fetchItems={fetchItems} />
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
