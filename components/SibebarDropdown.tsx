import React, { useState } from "react";
import { ChevronSolidIcon } from "./Icons";

const SibebarDropdown = ({ title, children }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="flex items-center gap-3 px-4 py-3 border-b border-[#1E2D3D] cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <ChevronSolidIcon state={open} />
        <p className="text-white text-base font-firacode leading-5">{title}</p>
      </div>
      {open && (
        <div className="text-white border-b border-[#1E2D3D] transition duration-500  ease-in-out">
          {children}
        </div>
      )}
    </div>
  );
};

export default SibebarDropdown;
