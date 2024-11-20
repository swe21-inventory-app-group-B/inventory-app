import React, { useEffect, useState } from "react";
import apiURL from "../api";
import Items from "./Items";
import AddItemForm from "./AddItemForm";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {}, []);

  return (
    <>
      <h1 className="title">Inventory App</h1>
      <Items />
      <AddItemForm />
    </>
  );
}

export default App;
