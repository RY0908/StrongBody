import { useRef, useState } from "react";

function NavBar() {
  var [switchhidden, setSwitchhidden] = useState("hidden");
  const menu = useRef(null);
  const menubtn = useRef(null);
  document.addEventListener("click", function (event) {
    const outsideClick = !menu.current.contains(event.target);
    const notbtn = !menubtn.current.contains(event.target);
    if (notbtn) {
      outsideClick ? setSwitchhidden("hidden") : setSwitchhidden("");
    }
  });
  return (
    <nav className="bg-main-color/80 backdrop-blur z-50 fixed top-0 w-full ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 max-xl:px-10 ">
        <a className="flex items-center">
          <img
            src="https://res.cloudinary.com/dwucsx9ot/image/upload/v1699699603/Strongbody/zldl8z3oeyjdjogetxck.svg"
            className="h-8 mr-3"
            alt=""
          />
          <span className="self-center text-2xl font-semibold font-lexend whitespace-nowrap text-white">
            StrongBody
          </span>
        </a>
        <button
          ref={menubtn}
          onClick={() => {
            setSwitchhidden(switchhidden === "" ? "hidden" : "");
          }}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden  focus:outline-none focus:ring-2   hover:bg-gray-700 focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          ref={menu}
          className={` ${switchhidden} w-full lg:block lg:w-auto  `}
        >
          <ul className="font-medium flex flex-col items-center justify-center p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent lg:flex-row lg:space-x-12 lg:mt-0 lg:border-0 ">
            <li>
              <a
                href="#home"
                className="block py-2 pl-3 font-lexend transition-all pr-4  rounded lg:bg-transparent lg:p-0 text-secondary-color"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 pl-3 font-lexend transition-all pr-4  rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-secondary-color lg:p-0 text-white hover:text-secondary-color"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block py-2 pl-3 font-lexend transition-all pr-4  rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-secondary-color lg:p-0 text-white hover:text-secondary-color"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="block py-2 pl-3 font-lexend transition-all pr-4  rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-secondary-color lg:p-0 text-white hover:text-secondary-color"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 pl-3 font-lexend transition-all pr-4  rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-secondary-color lg:p-0 text-white hover:text-secondary-color"
              >
                Contact
              </a>
            </li>
            <li>
              <button className="bg-transparent border border-secondary-color rounded-full px-5 py-2 hover:bg-secondary-color hover:opacity-90 text-white transition-all">
                Login/Register
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
