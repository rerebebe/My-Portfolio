import { useState, memo } from "react";
import MobileNav from "./MobileNav";
import Burger from "./Burger";
// import { NavLink } from "react-router-dom";

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
    href: "https://github.com/rerebeb",
    name: "GitHub",
  },
  {
    href: "https://drive.google.com/file/d/14X_kqQnNumMjSndY4ckbmAohFRebm1Gi/view?usp=sharing",
    name: "My Resume",
  },
];

const Nav = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <nav className="pt-2 pb-2 relative max-w-8xl mx-auto flex items-center justify-center px-4 sm:px-6 ">
        <Burger active={active} setActive={setActive} />

        <div className="hidden sm:visible sm:flex items-center space-x-10 ">
          {navLinksLeft.map((link) => (
            <a
              download={link.name === "My Resume"}
              target={link.name === "GitHub" ? "_blank" : "_self"}
              key={link.name}
              to={link.href}
              className={
                link.name === "About"
                  ? "text-indigo-400 text-lg font-bold"
                  : "transition font-medium text-gray hover:text-green-500 hover:border-b-2 "
              }
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="hidden sm:block flex items-center md:space-x-6"></div>
        {active && <MobileNav active={active} setActive={setActive} />}
      </nav>
    </div>
  );
};

export default memo(Nav);
