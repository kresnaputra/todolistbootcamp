import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline max-w-xl mx-auto p-4">
        To Do List
      </h1>
      <TodoList title="bersih - bersih" completed={false} />
      <TodoList title="baca" completed={true} />
      <TodoList title="olahraga" completed={false} />
    </div>
  );
}
