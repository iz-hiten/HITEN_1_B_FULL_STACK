import { useState } from "react";
import ProductCard from "./ProductCard.jsx";

export default function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };


  const products = [
    { name: "Laptop", price: 1200, description: "High performance laptop", inStock: true },
    { name: "Headphones", price: 200, description: "Noise cancelling", inStock: false },
    { name: "Smartphone", price: 800, description: "Latest model", inStock: true },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>

      <div style={{ marginBottom: "40px" }}>
        <h1>Simple To-Do App</h1>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={addTask}>Add</button>

        <ul>
          {todos.map((t, i) => (
            <li key={i}>
              {t} <button onClick={() => removeTask(i)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

     <div className="min-h-screen flex items-center justify-center bg-blue-500 text-white text-3xl font-bold">
      ....
    </div>
      <h1>Products</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((p, i) => (
          <ProductCard
            key={i}
            name={p.name}
            price={p.price}
            description={p.description}
            inStock={p.inStock}
          />
        ))}
      </div>
    </div>
  );
}
