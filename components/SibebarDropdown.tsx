import React, { useState } from "react";
import { ChevronOutlinedIcon, FolderIcon } from "./Icons";

const SibebarDropdown = ({ title, color, children }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#1E2D3D] py-1">
      <div
        className="flex items-center gap-2 px-2.5 py-1 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <ChevronOutlinedIcon state={open} />
        <FolderIcon color="red" />
        <p className="text-white text-base font-firacode leading-5">{title}</p>
      </div>
      {open && (
        <div className="text-white transition duration-500  ease-in-out">
          {children}
        </div>
      )}
    </div>
  );
};

export default SibebarDropdown;
