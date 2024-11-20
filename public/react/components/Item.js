import React from "react";
import "../../css/Items.css";

function Item({ item }) {
  return (
    <div className="item">
      <h2 className="item-name">{item.name}</h2>
      <p className="item-description">{item.description}</p>
      <p className="item-category">Category: {item.category}</p>
      <p className="item-price">Price: ${item.price}</p>
      <button onClick={() => deleteItem(item.id)}>Delete</button>
      <img className="item-image" src={item.image} alt={item.name} />
    </div>
  );
}

export default Item;
