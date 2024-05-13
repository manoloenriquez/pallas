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
      className="flex-1 flex flex-col w-full h-full overflow-hidden cursor-pointer border border-black min-h-[400px]"
      onMouseEnter={hovered}
      onMouseLeave={unhovered}
    >
      <div className="relative w-full h-full transition-opacity">
        <p className="text-3xl text-center text-white bg-pallasred border-b-2 border-black mt-0 py-4 justify-center whitespace-nowrap z-50">
          {name}
        </p>
        <div
          className={`overflow-hidden h-full transition-all mt-[-16px] ${
            isHovered ? "grayscale-0 scale-105" : "grayscale"
          }`}
          style={{
            backgroundImage: `url('${src}')`,
            backgroundSize: "contain",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
}
