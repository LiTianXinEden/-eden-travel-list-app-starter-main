import React, { useState } from "react";

export default function PackingList({ items, handleDeleteItem, handleUpdateItem }) {
    return (
        <div className="list">
            <ul>
                {items.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        description={item.description}
                        quantity={item.quantity}
                        packed={item.packed}
                        handleDeleteItem={handleDeleteItem}
                        handleUpdateItem={handleUpdateItem}
                    />

                ))}
            </ul>
        </div>
    );

    function Item(props) {
        return (
            <li

                style={{
                    textDecoration: props.packed ? "line-through" : "none",
                    cursor: "pointer",
                }}
            >
                <input
                    type="checkbox"
                    checked={props.packed}
                    onChange={() => props.handleUpdateItem(props.id)} // Toggle packed state
                />
                {props.description} ({props.quantity})
                <button className="delete-button" onClick={() => props.handleDeleteItem(props.id)}>❌</button>
            </li>
        );

    }
}