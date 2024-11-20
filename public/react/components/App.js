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

  return (
    <>
      <h1 className="title">Inventory App</h1>
      <Items />
      <AddItemForm />
    </>
  );
}

export default App;
