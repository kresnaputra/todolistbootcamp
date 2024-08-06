import React from "react";

export default function TodoItem({id, title, handleDeleteTodo}) {
  return (
    <div className="flex flex-row space-x-5 p-5" key={id}>
      <p>{title}</p>
      <button
        onClick={() => handleDeleteTodo(id)}
        className="bg-red-500 text-white p-2 rounded"
      >
        HAPUS
      </button>
    </div>
  );
}
