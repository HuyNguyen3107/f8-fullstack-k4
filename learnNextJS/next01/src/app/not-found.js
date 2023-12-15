import React from "react";
import img404 from "../assets/images/img404.jpg";
import Image from "next/image";

function NotFound() {
  return (
    <div>
      <Image
        src={img404}
        style={{
          width: "100vw",
          height: "100vh",
        }}
      />
    </div>
  );
}

export default NotFound;
