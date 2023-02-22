import React from "react";
import SibebarDropdown from "./SibebarDropdown";
import { FileIcon } from "./Icons";

const PersonalInfoDropdown = () => {
  return (
    <SibebarDropdown title="personal-info" color="#E99287">
      <div className="flex flex-col">
        <div className="flex items-center gap-2.5 pl-9 py-1.5 cursor-pointer select-none hover:bg-[#607B964D]">
          <FileIcon />
          <p className="text-[#607B96] text-base font-firacode leading-5 group-hover:text-white transition-colors duration-400 ease-in-out">
            high-school
          </p>
        </div>
        <div className="flex items-center gap-2.5 pl-9 p-1.5 cursor-pointer select-none hover:bg-[#607B964D]">
          <FileIcon />
          <p className="text-[#607B96] text-base font-firacode leading-5 group-hover:text-white transition-colors duration-400 ease-in-out">
            university
          </p>
        </div>
      </div>
    </SibebarDropdown>
  );
};

export default PersonalInfoDropdown;
