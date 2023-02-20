import React from "react";
import SibebarDropdown from "./SibebarDropdown";
import { EmailIcon, PhoneIcon } from "./Icons";

const ContactDropdown = () => {
  return (
    <SibebarDropdown title="contacts">
      <div className="flex flex-col">
        <a
          className="group flex items-center gap-2 py-2 px-3 hover:bg-[#607B964D]"
          href="mailto:hi@nomanejaz.dev"
        >
          <EmailIcon />
          <p className="text-[#607B96] text-base font-firacode leading-5 group-hover:text-white transition-colors duration-400 ease-in-out">
            hi@nomanejaz.dev
          </p>
        </a>
        <a
          className="group flex items-center gap-2 py-2 px-3 hover:bg-[#607B964D]"
          href="tel:+923049705035"
        >
          <PhoneIcon />
          <p className="text-[#607B96] text-base font-firacode leading-5 group-hover:text-white transition-colors duration-400 ease-in-out">
            +923049705035
          </p>
        </a>
      </div>
    </SibebarDropdown>
  );
};

export default ContactDropdown;
