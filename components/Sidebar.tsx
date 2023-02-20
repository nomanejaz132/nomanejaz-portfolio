import React, { useState } from "react";
import { HobbiesIcon, PersonalInfoIcon, ProfessionalInfoIcon } from "./Icons";
import SibebarDropdown from "./SibebarDropdown";
import ContactDropdown from "./ContactDropdown";
import PersonalInfoDropdown from "./PersonalInfoDropdown";

const Sidebar = () => {
  const [tab, setTab] = useState(1);
  return (
    <div className="flex">
      <div className="h-[calc(100vh-128px)] py-3 px-4 border-r border-[#1E2D3D]">
        <ul className="flex flex-col gap-2">
          <li className="group p-2 cursor-pointer" onClick={() => setTab(1)}>
            <ProfessionalInfoIcon active={tab} />
          </li>
          <li className="group p-2 cursor-pointer" onClick={() => setTab(2)}>
            <PersonalInfoIcon active={tab} />
          </li>
          <li className="group p-2 cursor-pointer" onClick={() => setTab(3)}>
            <HobbiesIcon active={tab} />
          </li>
        </ul>
      </div>
      <div className="w-[239px] h-[calc(100vh-128px)] border-r border-[#1E2D3D]">
        {tab === 1 && (
          <>
            <p className="text-white text-center">Tab 1 content</p>
          </>
        )}
        {tab === 2 && (
          <>
            <PersonalInfoDropdown />
            <ContactDropdown />
          </>
        )}
        {tab === 3 && (
          <>
            <p className="text-white text-center">Tab 2 content</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
