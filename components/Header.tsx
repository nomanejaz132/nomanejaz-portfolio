import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <div className="bg-primary-2 border border-line-1 rounded-t-lg fixed">
      <div className="w-full flex flex-row items-center">
        <ul>
          <li className="w-64 border-r border-line-1">
            <Link
              href="/"
              className="pl-6 py-4 flex items-center text-secondary-1 font-firacode"
            >
              noman-ejaz
            </Link>
          </li>
        </ul>
        <div className="flex flex-row justify-between w-full">
          <ul className="flex">
            <li
              className={`border-r border-line-1 font-firacode transition-colors duration-700 ease-in-out ${
                router.asPath === '/'
                  ? 'text-white border-b border-b-accent-1'
                  : 'text-secondary-1'
              }`}
            >
              <Link className="px-8 py-4 flex items-center" href="/">
                _hello
              </Link>
            </li>
            <li
              className={`border-r border-line-1 font-firacode transition-colors duration-700 ease-in-out ${
                router.asPath === '/about'
                  ? 'text-white border-b border-b-accent-1'
                  : 'text-secondary-1'
              }`}
            >
              <Link className="px-8 py-4 flex items-center" href="/about">
                _about-me
              </Link>
            </li>
            <li
              className={`border-r border-line-1 font-firacode transition-colors duration-700 ease-in-out ${
                router.asPath === '/projects'
                  ? 'text-white border-b border-b-accent-1'
                  : 'text-secondary-1'
              }`}
            >
              <Link className="px-8 py-4 flex items-center" href="/projects">
                _projects
              </Link>
            </li>
          </ul>
          <ul className="flex">
            <li
              className={`border-l border-line-1 font-firacode text-secondary-1 transition-colors duration-700 ease-in-out ${
                router.asPath === '/contact'
                  ? 'text-white border-b border-b-accent-1'
                  : 'text-secondary-1'
              }`}
            >
              <Link className="px-8 py-4 flex items-center" href="/contact">
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
