import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { ThemeContext } from '@/contexts';

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [menu, setMenu] = useState<boolean>(false);

  const classHamburger = [
    'block absolute right-4 lg:hidden',
    menu && 'hamburger-active',
  ]
    .filter(Boolean)
    .join(' ');
  const classMenu = [
    'absolute py-5 bg-white dark:bg-gray-900 dark:lg:bg-transparent shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none lg:p-0',
    !menu && 'hidden',
  ]
    .filter(Boolean)
    .join(' ');

  useEffect(() => {
    window.onscroll = function () {
      const header = document.querySelector('header');
      const fixedNav = header?.offsetTop || 0;

      if (window.pageYOffset > fixedNav) {
        header?.classList.add('navbar-fixed');
      } else {
        header?.classList.remove('navbar-fixed');
      }
    };
  }, []);

  const navData = [
    { link: '/', title: 'Home' },
    { link: `${process.env.baseURI}#projects`, title: 'Projects' },
    { link: 'https://github.com/argadeva', title: 'Github' },
    { link: `${process.env.baseURI}#contact`, title: 'Contact' },
  ];

  const NavMap = () => {
    return navData.map((nav, idx) => (
      <li className="group" key={idx}>
        <Link href={nav.link}>
          <a className="mx-8 flex py-2 text-base font-semibold text-black group-hover:text-yellow-500 dark:text-white">
            {nav.title}
          </a>
        </Link>
      </li>
    ));
  };

  return (
    <header className="absolute top-0 left-0 z-10 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative flex items-center justify-between py-4">
          <div className="flex items-center gap-5">
            <button
              type="button"
              className="inline-flex items-center rounded-full border border-gray-200 bg-white px-2 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              )}
            </button>
            <Link href="/">
              <a className="text-lg font-bold">About Me</a>
            </Link>
          </div>

          <div className="flex items-center px-4">
            <button
              onClick={() => setMenu((val) => !val)}
              className={classHamburger}
            >
              <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
            </button>

            <nav className={classMenu}>
              <ul className="block lg:flex">{NavMap()}</ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
