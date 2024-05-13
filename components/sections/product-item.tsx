"use client";

import { useState } from "react";

export default function ProductItem({
  src,
  name,
}: {
  src: string;
  name: string;
}) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const hovered = () => setIsHovered(true);
  const unhovered = () => setIsHovered(false);

  return (
    <div
      className="flex flex-col w-full h-full overflow-hidden cursor-pointer border border-pallasred"
      onMouseEnter={hovered}
      onMouseLeave={unhovered}
    >
      <div className="relative w-full h-full transition-opacity">
        <div
          className={`overflow-hidden h-full transition-all ${
            isHovered ? "grayscale-0 scale-105" : "grayscale"
          }`}
          style={{
            backgroundImage: `url('${src}')`,
            backgroundSize: "contain",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <p
          className="text-3xl text-center text-pallaslightred mt-4 absolute top-0 left-[50%] justify-center whitespace-nowrap"
          style={{
            transform: "translate(-50%, 0)",
          }}
        >
          {name}
        </p>
      </div>
    </div>
  );
}
