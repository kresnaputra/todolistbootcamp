import React from "react";

export default function TodoList({title, completed}) {
  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="flex items-center">
        <input type="checkbox" className="mr-2" />
        <span className={completed ? "line-through text-gray-400" : ""}>
          {title}
        </span>
      </div>
      <button className="text-red-500 hover:text-red-700">Hapus</button>
    </div>
  );
}
