"use client";

import React, { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ title, completed }) {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    const data = {
      id: Math.floor(Math.random() * 1000),
      title: newTodo,
      completed: false,
    };

    setTodos([...todos, data]);
    setNewTodo("");
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="flex mb-4">
        <input
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
          type="text"
          className="flex-1 p-2 border-gray-300 rounded mr-2 text-black"
          placeholder="Tambah Todo baru"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Tambah
        </button>
      </div>
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          title={item.title}
          handleDeleteTodo={handleDeleteTodo}

        />
      ))}
    </div>
  );
}
