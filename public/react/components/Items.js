import React, { useEffect, useState } from "react";
import Item from "./Item";
import apiURL from "../api";
import "../../css/Items.css";

function Items() {
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
    <div className="items">
      {items.length > 0 ? (
        items.map((item) => <Item key={item.id} item={item} />)
      ) : (
        <p>No items available</p>
      )}
    </div>
  );
}

export default Items;
