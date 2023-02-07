import React, { useState } from "react";
import {
  EmailIcon,
  HobbiesIcon,
  PersonalInfoIcon,
  PhoneIcon,
  ProfessionalInfoIcon,
} from "./Icons";
import SibebarDropdown from "./SibebarDropdown";

const Sidebar = () => {
  const [tab, setTab] = useState(false);
  return (
    <div className="flex">
      <div className="h-[calc(100vh-128px)] py-3 px-4 border-r border-[#1E2D3D]">
        <ul className="flex flex-col gap-2">
          <li className="group p-2 cursor-pointer">
            <ProfessionalInfoIcon />
          </li>
          <li className="group p-2 cursor-pointer">
            <PersonalInfoIcon />
          </li>
          <li className="group p-2 cursor-pointer">
            <HobbiesIcon />
          </li>
        </ul>
      </div>
      <div className="w-[239px] h-[calc(100vh-128px)] border-r border-[#1E2D3D]">
        <SibebarDropdown title="personal-info">
          <div>personal something</div>
        </SibebarDropdown>
        <SibebarDropdown title="contacts">
          <div className="flex flex-col gap-3">
            <a
              className="group flex items-center gap-2"
              href="mailto:hi@nomanejaz.dev"
            >
              <EmailIcon />
              <p className="text-[#607B96] text-base font-firacode leading-5 group-hover:text-white transition-colors duration-400 ease-in-out">
                hi@nomanejaz.dev
              </p>
            </a>
            <a
              className="group flex items-center gap-2"
              href="tel:+923049705035"
            >
              <PhoneIcon />
              <p className="text-[#607B96] text-base font-firacode leading-5 group-hover:text-white transition-colors duration-400 ease-in-out">
                +923049705035
              </p>
            </a>
          </div>
        </SibebarDropdown>
      </div>
    </div>
  );
};

export default Sidebar;
