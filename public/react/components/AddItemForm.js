import React, { useState } from 'react';

const AddItemForm = ({ fetchItems }) => {
    const [itemData, setItemData] = useState({
        name: '',
        price: '',
        description: '',
        category: '',
        image: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItemData({ ...itemData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(itemData)
            });
            if (response.ok) {
                await fetchItems(); // Fetch updated list after adding the item
                setItemData({ name: '', price: '', description: '', category: '', image: '' }); // Reset form
            } else {
                console.error('Failed to add item');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Item Name"
                value={itemData.name}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="price"
                placeholder="Price"
                value={itemData.price}
                onChange={handleChange}
                required
            />
            <textarea
                name="description"
                placeholder="Description"
                value={itemData.description}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="category"
                placeholder="Category"
                value={itemData.category}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={itemData.image}
                onChange={handleChange}
                required
            />
            <button type="submit">Add Item</button>
        </form>
    );
};

export default AddItemForm;
