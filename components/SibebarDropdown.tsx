import React, { useState } from "react";
import { ChevronIcon } from "./Icons";

const SibebarDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="flex items-center gap-3 px-4 py-3 border-b border-[#1E2D3D] cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <ChevronIcon state={open} />
        <p className="text-white text-base font-firacode leading-5">
          personal-info
        </p>
      </div>
      {open && (
        <div className="p-4 text-white border-b border-[#1E2D3D] transition duration-500  ease-in-out">
          bio
        </div>
      )}
    </div>
  );
};

export default SibebarDropdown;
