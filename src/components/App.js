import React, { useState } from "react";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import Logo from "./Logo";
// Initial packing items
// const initialItems = [
//   { id: 1, description: "Shirt", quantity: 5, packed: false },
//   { id: 2, description: "Pants", quantity: 2, packed: true },
// ];
// function Logo() {
//   return <h1>My Travel List</h1>;
// }
// function Form({ handleAddItems }) {
//   const [description, setDescription] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   function handleSubmit(e) {
//     e.preventDefault();
//     const newItem = {
//       id: Date.now(),
//       description: description,
//       quantity: quantity,
//       packed: false,
//     };
//     handleAddItems(newItem);
//     setDescription("");
//     setQuantity(1);
//   }
//   function handleDescriptionChange(e) {
//     setDescription(e.target.value);
//   }
//   function handleQuantityChange(e) {
//     setQuantity(Number(e.target.value));
//   }



//   return (
//     <form className="add-form" onSubmit={handleSubmit}>
//       <h3>What do you need to pack?</h3>
//       <select id="quantity" name="quantity" value={quantity} onChange={handleQuantityChange}>
//         <option value="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//       </select>
//       <input id="item" type="text" value={description} onChange={handleDescriptionChange} placeholder="item..." />
//       <button type="submit">Add</button>
//     </form>
//   );
// }


// function PackingList({ items, handleDeleteItem, handleUpdateItem }) {
//   return (
//     <div className="list">
//       <ul>
//         {items.map((item) => (
//           <Item
//             key={item.id}
//             id={item.id}
//             description={item.description}
//             quantity={item.quantity}
//             packed={item.packed}
//             handleDeleteItem={handleDeleteItem}
//             handleUpdateItem={handleUpdateItem}
//           />
//         ))}
//       </ul>
//     </div>
//   );
//   function Item(props) {
//     return (
//       <li
//         style={{
//           textDecoration: props.packed ? "line-through" : "none",
//           cursor: "pointer",
//         }}
//       >
//         <input
//           type="checkbox"
//           checked={props.packed}
//           onChange={() => props.handleUpdateItem(props.id)} // Toggle packed state
//         />
//         {props.description} ({props.quantity})
//         <button className="delete-button" onClick={() => props.handleDeleteItem(props.id)}>❌</button>
//       </li>
//     );
//   }
// }
// function Stats({ items }) {
//   const itemLength = items.length;
//   const packedItems = items.filter((item) => item.packed).length;
//   const packedPercentage = itemLength > 0 ? Math.round((packedItems / itemLength) * 100) : 0;
//   return (
//     <footer className="stats">
//       {/* <em>You have {itemLength} items in the list. You already packed {packedItems} ({packedPercentage}%).</em> */}
//       {packedPercentage === 100 ?
//         (<em>You got everything!</em>) : (<em>You have {itemLength} items in the list. You already packed {packedItems} ({packedPercentage}%).</em>)}
//     </footer>
//   );
// }


function App() {
  const [items, setItems] = useState([]);
  //====  
  function handleAddItems(item) {
    setItems((prevItems) => [item, ...prevItems]);
  }
  //====
  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }
  //====
  function handleUpdateItem(id) {
    setItems((prevItems) => prevItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          packed: !item.packed,
        };
      }
      return item;
    }));
  }
  //====
  function removeAllItems() {
    setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      
      <PackingList items={items} handleDeleteItem={handleDeleteItem} handleUpdateItem={handleUpdateItem} />
      <button onClick={removeAllItems} className="clear-button">Remove All Items</button>
      <Stats items={items} />
      
    </div>
  );
}
export default App;