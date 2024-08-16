"use client";

import { useState } from "react";

export default function ProductItem({
  src,
  name,
  collection,
}: {
  src: string;
  name: string;
  collection: string;
}) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const hovered = () => setIsHovered(true);
  const unhovered = () => setIsHovered(false);

  return (
    <div
      className="flex-1 flex flex-col w-full h-full overflow-hidden cursor-pointer border border-black min-h-[400px]"
      onMouseEnter={hovered}
      onMouseLeave={unhovered}
    >
      <div className="relative w-full h-full transition-opacity">
        <div
          className={`absolute top-0 left-0 h-full w-full bg-pallasred text-white transition-all ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        ></div>
        <div
          className={`absolute top-0 left-0 text-white flex justify-center items-center text-center h-full w-full transition-all ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {name}
        </div>
        <div
          className={`overflow-hidden h-full transition-all`}
          style={{
            backgroundImage: `url('${src}')`,
            backgroundSize: collection === "transmission" ? "cover" : "contain",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
}
