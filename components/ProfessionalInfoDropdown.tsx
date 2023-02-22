import React from "react";
import SibebarDropdown from "./SibebarDropdown";
import SubDropdown from "./SubDropdown";
import { FileIcon } from "./Icons";

const ProfessionalInfoDropdown = () => {
  return (
    <SibebarDropdown title="perfessional-info">
      <div className="flex flex-col">
        <SubDropdown title="education" color="#3A49A4">
          <div className="flex items-center gap-2.5 pl-9 p-1.5 cursor-pointer select-none hover:bg-[#607B964D]">
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
        </SubDropdown>
        <SubDropdown title="experience" color="#E99287">
          <div className="flex items-center gap-2.5 pl-9 p-1.5 cursor-pointer select-none hover:bg-[#607B964D]">
            <FileIcon />
            <p className="text-[#607B96] text-base font-firacode leading-5 group-hover:text-white transition-colors duration-400 ease-in-out">
              work-experience
            </p>
          </div>
        </SubDropdown>
        <SubDropdown title="skills" color="blue">
          <div className="flex items-center gap-2.5 pl-9 p-1.5 cursor-pointer select-none hover:bg-[#607B964D]">
            <FileIcon />
            <p className="text-[#607B96] text-base font-firacode leading-5 group-hover:text-white transition-colors duration-400 ease-in-out">
              skills
            </p>
          </div>
        </SubDropdown>
        <SubDropdown title="certs" color="green">
          <div className="flex items-center gap-2.5 pl-9 p-1.5 cursor-pointer select-none hover:bg-[#607B964D]">
            <FileIcon />
            <p className="text-[#607B96] text-base font-firacode leading-5 group-hover:text-white transition-colors duration-400 ease-in-out">
              certificates
            </p>
          </div>
        </SubDropdown>
      </div>
    </SibebarDropdown>
  );
};

export default ProfessionalInfoDropdown;
