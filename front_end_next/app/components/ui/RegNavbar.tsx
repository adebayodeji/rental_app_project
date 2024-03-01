import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import AppLogo from "./AppLogoDark";

function RegNavbar({ onShow }: { onShow: () => void }) {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <header>
      <div
        ref={ref}
        className="mx-5 flex justify-between items-center p-4 text-black"
      >
        <div className="flex items-center">
          <AppLogo />
        </div>

        <nav className="hidden lg:flex items-center space-x-4">
          <a
            href="#favourites"
            className="hover:text-gray-700 transition duration-300"
            onClick={() => setOpen(false)}
          >
            Favourites
          </a>
          <button
            className="hover:text-gray-700 transition duration-300 px-3 py-2 rounded-md"
            onClick={onShow}
          >
            Sign in
          </button>
          <button
            className="hover:text-gray-700 transition duration-300 px-3 py-2 rounded-md"
            onClick={onShow}
          >
            Sign Up
          </button>
        </nav>

        <div className="lg:hidden flex flex-row items-center ml-[-10rem]">
          <button
            className="hover:text-gray-700 transition duration-300 px-5 py-2 rounded-md"
            onClick={onShow}
          >
            Sign in
          </button>
          <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
        </div>

        {isOpen && (
          <div className="fixed left-0 shadow-4xl right-0 top-[5rem] h-full pt-0 bg-white ">
            <ul className="grid gap-2 list-none text-sm mb-2">
              <li className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700">
                <a
                  onClick={() => {
                    setOpen(false);
                    document.getElementById("favourites")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="flex items-center justify-between"
                  href="#favourites"
                >
                  <span className="flex gap-1 font-bold">Favourites</span>
                </a>
              </li>
              <li>
                <span className="flex gap-1 font-bold text-sm">
                  Property Types
                </span>
                {/* Faint line after "Property Types" */}
                <hr className="my-2 border-t border-gray-300" />
              </li>
              <li>
                <span className="font-bold text-lg">Company</span>
              </li>
              <li>
                <a
                  className="font-bold text-sm text-black"
                  onClick={() => setOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="font-bold text-sm text-black"
                  onClick={() => setOpen(false)}
                >
                  List Your Property
                </a>
              </li>
              <li>
                <a
                  className="font-bold text-sm text-black"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="font-bold text-sm text-black"
                  onClick={() => setOpen(false)}
                >
                  Partnership
                </a>
              </li>
              {/* Faint line before "Sign in" and "Sign Up" */}
              <hr className="my-2 border-t border-gray-300" />
              <div className="flex flex-col lg:flex-row gap-2 mr-10">
                <li className="w-full rounded-xl pr-px-8 bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700">
                  <button
                    className="px-3 py-2 w-full rounded-md"
                    onClick={onShow}
                  >
                    Sign in
                  </button>
                </li>
                <li className="w-full rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700">
                  <button
                    className="px-3 py-2 w-full rounded-md"
                    onClick={onShow}
                  >
                    Sign Up
                  </button>
                </li>
              </div>
            </ul>
          </div>
        )}
      </div>
      <hr className="hidden lg:block bg-gray-200 h-px border-none" />
    </header>
  );
}

export default RegNavbar;
