import React, { useEffect, useState } from "react";
import apiURL from "../api";
import AddItemForm from "./AddItemForm";

function App() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const response = await fetch(`${apiURL}/items`);
    const data = await response.json();
    setItems(data);
  }


  useEffect(() => {
    fetchItems();
  }, []);

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
