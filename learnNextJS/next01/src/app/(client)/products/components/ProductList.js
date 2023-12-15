"use client";

import { useRef, useState } from "react";

function ProductList() {
  const [status, setStatus] = useState(true);
  return (
    <div>
      <h1>Products</h1>
      <p
        style={{
          display: `${status ? "block" : "none"}`,
        }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
        vitae dolorem consectetur nesciunt eum ipsum beatae at non repellat
        sapiente sint consequatur laboriosam, aspernatur quod quam iusto sed
        officia iure?
      </p>
      <button
        onClick={() => {
          setStatus(!status);
        }}
      >
        Thu gon
      </button>
    </div>
  );
}

export default ProductList;
