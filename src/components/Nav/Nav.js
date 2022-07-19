import { useState, memo } from "react";
import MobileNav from "./MobileNav";
import Burger from "./Burger";

// 先做一個array物件
export const navLinksLeft = [
  {
    href: "/",
    name: "About",
  },
  {
    href: "/my-work",
    name: "My Work",
  },
  {
    href: "https://github.com/rerebebe/My-Portfolio",
    name: "GitHub",
  },
  {
    href: "https://drive.google.com/file/d/1vGQ7Umm1XGGzc9dOkIJ5ybYdPf-tpgkE/view?usp=sharing",
    name: "My Resume",
  },
];

const Nav = () => {
  const [active, setActive] = useState(false);

  return (
    <nav className="pt-6 relative max-w-8xl mx-auto flex items-center justify-center px-4 sm:px-6">
      <Burger active={active} setActive={setActive} />

      <div className="hidden sm:visible sm:flex items-center space-x-10">
        {navLinksLeft.map(
          (
            link // 再從上面的array裡面抓
          ) => (
            <a
              download={link.name === "My Resume"}
              target={link.name === "GitHub" ? "_blank" : "_self"}
              key={link.name}
              href={link.href}
              className={
                link.name === "About"
                  ? "text-indigo-200 text-lg font-bold"
                  : "transition delay-150 text-md text-white hover:font-bold hover:text-gray-200 "
              }
            >
              {link.name}
            </a>
          )
        )}
      </div>
      <div className="hidden sm:block flex items-center md:space-x-6">
        {/* <a
          href="/"
          className="text-base font-medium text-white hover:text-gray-200"
        >
          Log in
        </a>
        <a
          href="/"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium text-white hover:bg-gray-700 bg-gray-600 rounded-md"
        >
          Sign up
        </a> */}
      </div>
      {active && <MobileNav active={active} setActive={setActive} />}
    </nav>
  );
};

export default memo(Nav);
