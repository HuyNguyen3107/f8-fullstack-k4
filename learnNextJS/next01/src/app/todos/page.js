import React from "react";
import TodoForm from "./todoForm";
import { revalidateTag } from "next/cache";
export const todoApi = `http://localhost:3005/todos`;
const getTodos = async () => {
  const response = await fetch(todoApi, {
    next: {
      tags: ["todos"],
    },
  });
  return response.json();
};
const handleClearCache = async () => {
  "use server";
  revalidateTag("todos");
};
const TodoPage = async () => {
  const todoList = await getTodos();
  return (
    <div>
      <h1>Todo App</h1>
      <form action={handleClearCache}>
        <button>Refresh</button>
      </form>
      {todoList.map(({ id, title }) => {
        return <h3 key={id}>{title}</h3>;
      })}
      <TodoForm />
    </div>
  );
};

export default TodoPage;
