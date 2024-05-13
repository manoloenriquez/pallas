"use client";

import { useState } from "react";

export default function CatalogItem({
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
      className="flex flex-col w-full h-full overflow-hidden cursor-pointer"
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
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <p
          className="text-3xl text-center text-pallaslightred mt-4 absolute top-[50%] left-[50%] justify-center"
          style={{
            transform: "translate(-50%, -50%)",
          }}
        >
          {name}
        </p>
      </div>
    </div>
  );
}
