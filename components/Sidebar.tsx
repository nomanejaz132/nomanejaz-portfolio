import React, { useState } from "react";
import { HobbiesIcon, PersonalInfoIcon, ProfessionalInfoIcon } from "./Icons";
import SibebarDropdown from "./SibebarDropdown";
import ContactDropdown from "./ContactDropdown";

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
        <ContactDropdown />
      </div>
    </div>
  );
};

export default Sidebar;
