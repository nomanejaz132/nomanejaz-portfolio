import React, { useState } from "react";
import { ChevronOutlinedIcon, FolderIcon } from "./Icons";

const SubDropdown = ({ title, color, children }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2" onClick={() => setOpen(!open)}>
        <ChevronOutlinedIcon state={open} />
        <a className="flex items-center gap-2.5" href="#">
          <FolderIcon color={color} />
          <p className="text-[#607B96] text-base font-firacode leading-5 group-hover:text-white transition-colors duration-400 ease-in-out">
            {title}
          </p>
        </a>
      </div>
      {open && (
        <div className="flex flex-col gap-2 transition duration-500 ease-in-out">
          {children}
        </div>
      )}
    </div>
  );
};

export default SubDropdown;
