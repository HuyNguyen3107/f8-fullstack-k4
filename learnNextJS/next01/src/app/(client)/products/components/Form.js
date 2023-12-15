"use client";
import React, { useState } from "react";

import { usePathname, useRouter } from "next/navigation";
function Form() {
  const [form, setForm] = useState({
    status: "all",
    query: "",
  });
  const pathname = usePathname();
  const router = useRouter();
  const handleSubmit = () => {
    const url = `${pathname}?${new URLSearchParams(form)}`;
    router.push(url);
    // redirect(url);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <select
        name="status"
        onChange={(e) => {
          handleChange(e);
        }}
      >
        <option value="all">All status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <input
        type="search"
        name="query"
        placeholder="Keyword..."
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button>Search</button>
    </form>
  );
}

export default Form;
