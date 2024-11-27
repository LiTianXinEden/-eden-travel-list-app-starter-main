import React, { useState } from "react";

export default function Form({ handleAddItems }) {

    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);


    function handleSubmit(e) {
        e.preventDefault();
        const newItem = {
            id: Date.now(),
            description: description,
            quantity: quantity,
            packed: false,
        };
        handleAddItems(newItem);
        setDescription("");
        setQuantity(1);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleQuantityChange(e) {
        setQuantity(Number(e.target.value));
    }


    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need to pack? 🧳</h3>

            <select id="quantity" name="quantity" value={quantity} onChange={handleQuantityChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>

            <input id="item" type="text" value={description} onChange={handleDescriptionChange} placeholder="item..." />
            <button type="submit">Add</button>
        </form>
    );

}

