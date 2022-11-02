import React from "react";
import { useRouter } from "next/router";
import { TwitterIcon, InstagramIcon, GitHubIcon } from "./Icons";

const Footer = () => {
  const router = useRouter();

  return (
    <div className="bg-primary-2 border border-line-1 rounded-b-lg fixed bottom-0 w-full">
      <div className="flex flex-row justify-between w-full">
        <ul className="flex">
          <li className="px-8 py-4 flex items-center border-r border-line-1 font-firacode text-secondary-1">
            find me in:
          </li>
          <li className="border-r border-line-1">
            <a
              href="https://twitter.com/nomanejaz132"
              target="noopener"
              aria-label="Twitter Icon"
              className="p-5 flex items-center group"
            >
              <TwitterIcon />
            </a>
          </li>
          <li className="border-r border-line-1">
            <a
              href="https://www.instagram.com/nomanejaz32/"
              target="noopener"
              aria-label="Instagram Icon"
              className="p-5 flex items-center group"
            >
              <InstagramIcon />
            </a>
          </li>
        </ul>
        <ul className="flex">
          <li className="border-l border-line-1 font-firacode text-secondary-1 hover:text-white">
            <a
              className="p-5 flex items-center group transition-colors duration-300 ease-in-out"
              href="https://github.com/nomanejaz132"
              target="noopener"
            >
              @nomanejaz132
              <div className="ml-1">
                <GitHubIcon />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
