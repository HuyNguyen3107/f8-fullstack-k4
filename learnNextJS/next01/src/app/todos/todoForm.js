"use client";
import React, { useRef, useState } from "react";
import { handleAddTodo } from "./action";
function TodoForm() {
  const formRef = useRef();
  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await handleAddTodo(formData);
        formRef.current.reset();
      }}
    >
      <input type="text" placeholder="Job Name..." name="title" />
      <button>Add Job</button>
    </form>
  );
}

export default TodoForm;
