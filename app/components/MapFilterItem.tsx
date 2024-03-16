import React from "react";
import { categoryItems } from "../lib/categoryItems";
import Link from "next/link";
import Image from "next/image";

const MapFilterItem = () => {
  return (
    <div className="flex gap-x-10 mt-5 w-full overflow-x-scroll no-scrollbar">
      {categoryItems.map((item) => (
        <Link
          key={item.id}
          href=""
          className="flex flex-col items-center gap-y-1"
        >
          <div className="relative w-6 h-6">
            <Image
              src={item.imageUrl}
              alt="category image"
              className="w-6 h-6"
              width={24}
              height={24}
            />
          </div>
          <p className="text-sm font-normal">{item.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default MapFilterItem;
