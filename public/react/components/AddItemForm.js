import React, { useState } from "react";
import "../../css/AddItemForm.css";

function AddItemForm() {
  const [task, setTask] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    setTask(data);
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <label className="label">Name:</label>
        <input
          type="text"
          name="name"
          value={task.name}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div>
        <label className="label">Price:</label>
        <input
          type="text"
          name="price"
          value={task.price}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div>
        <label className="label">Description:</label>
        <input
          type="text"
          name="description"
          value={task.description}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div>
        <label className="label">Category:</label>
        <input
          type="text"
          name="category"
          value={task.category}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div>
        <label className="label">Image:</label>
        <input
          type="text"
          name="image"
          value={task.image}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <button type="submit" className="submit-button">
        Create Item
      </button>
    </form>
  );
}

export default AddItemForm;
