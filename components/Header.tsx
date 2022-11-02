import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <div className="bg-primary-2 border border-line-1 rounded-t-lg fixed w-full">
      <div className="w-full flex flex-row items-center">
        <ul>
          <li className="md:w-36 lg:w-64 border-r border-line-1">
            <Link
              href="/"
              className="md:pl-3 md:py-2 lg:pl-6 lg:py-4 flex items-center md:text-sm lg:text-base text-secondary-1 font-firacode"
            >
              noman-ejaz
            </Link>
          </li>
        </ul>
        <div className="flex flex-row justify-between w-full">
          <ul className="flex">
            <li
              className={`border-r border-line-1 md:text-sm lg:text-base font-firacode transition-colors duration-700 ease-in-out ${
                router.asPath === "/"
                  ? "text-white border-b border-b-accent-1"
                  : "text-secondary-1"
              }`}
            >
              <Link
                className="md:px-4 md:py-2 lg:px-8 lg:py-4 flex items-center"
                href="/"
              >
                _hello
              </Link>
            </li>
            <li
              className={`border-r border-line-1 md:text-sm lg:text-base font-firacode transition-colors duration-700 ease-in-out ${
                router.asPath === "/about"
                  ? "text-white border-b border-b-accent-1"
                  : "text-secondary-1"
              }`}
            >
              <Link
                className="md:px-4 md:py-2 lg:px-8 lg:py-4 flex items-center"
                href="/about"
              >
                _about-me
              </Link>
            </li>
            <li
              className={`border-r border-line-1 md:text-sm lg:text-base font-firacode transition-colors duration-700 ease-in-out ${
                router.asPath === "/projects"
                  ? "text-white border-b border-b-accent-1"
                  : "text-secondary-1"
              }`}
            >
              <Link
                className="md:px-4 md:py-2 lg:px-8 lg:py-4 flex items-center"
                href="/projects"
              >
                _projects
              </Link>
            </li>
          </ul>
          <ul className="flex">
            <li
              className={`border-l border-line-1 md:text-sm lg:text-base font-firacode text-secondary-1 transition-colors duration-700 ease-in-out ${
                router.asPath === "/contact"
                  ? "text-white border-b border-b-accent-1"
                  : "text-secondary-1"
              }`}
            >
              <Link
                className="md:px-4 md:py-2 lg:px-8 lg:py-4 flex items-center"
                href="/contact"
              >
                _contact-me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
