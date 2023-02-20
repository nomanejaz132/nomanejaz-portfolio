import React, { useState } from "react";
import { ChevronOutlinedIcon, FolderIcon } from "./Icons";

const SubDropdown = ({ title, color, children }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <div
        className="flex items-center gap-2 py-1 px-3 hover:bg-[#607B964D] cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <ChevronOutlinedIcon state={open} />
        <a className="flex items-center gap-2.5" href="#">
          <FolderIcon color={color} />
          <p className="text-[#607B96] text-base font-firacode leading-5 transition-colors duration-400 ease-in-out">
            {title}
          </p>
        </a>
      </div>
      {open && (
        <div className="flex flex-col transition duration-500 ease-in-out">
          {children}
        </div>
      )}
    </div>
  );
};

export default SubDropdown;
