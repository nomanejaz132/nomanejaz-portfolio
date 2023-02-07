import React, { useState } from "react";
import SibebarDropdown from "./SibebarDropdown";
import SubDropdown from "./SubDropdown";
import { FileIcon } from "./Icons";

const PersonalInfoDropdown = () => {
  return (
    <SibebarDropdown title="personal-info">
      <div className="flex flex-col gap-3">
        <SubDropdown title="bio" color="#E99287">
          <div className="flex items-center gap-2.5 pl-6">
            <FileIcon />
            <p className="text-[#607B96] text-base font-firacode leading-5 group-hover:text-white transition-colors duration-400 ease-in-out">
              high-school
            </p>
          </div>
        </SubDropdown>
        <SubDropdown title="interests" color="#43D9AD">
          <div className="flex items-center gap-2.5 pl-6">
            <FileIcon />
            <p className="text-[#607B96] text-base font-firacode leading-5 group-hover:text-white transition-colors duration-400 ease-in-out">
              Bedminton
            </p>
          </div>
        </SubDropdown>
        <SubDropdown title="education" color="#3A49A4">
          <div className="flex items-center gap-2.5 pl-6">
            <FileIcon />
            <p className="text-[#607B96] text-base font-firacode leading-5 group-hover:text-white transition-colors duration-400 ease-in-out">
              high-school
            </p>
          </div>
          <div className="flex items-center gap-2.5 pl-6">
            <FileIcon />
            <p className="text-[#607B96] text-base font-firacode leading-5 group-hover:text-white transition-colors duration-400 ease-in-out">
              university
            </p>
          </div>
        </SubDropdown>
      </div>
    </SibebarDropdown>
  );
};

export default PersonalInfoDropdown;
