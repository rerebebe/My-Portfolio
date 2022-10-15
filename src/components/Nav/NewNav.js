import { useState } from "react";
import { Navbar, Text, useTheme } from "@nextui-org/react";
import { Box } from "./Box.js";
import { Link, useLocation } from "react-router-dom";
import MobileNav from "./MobileNav.js";
import Burger from "./Burger";
import { CgUserlane } from "react-icons/cg";

const NewNav = () => {
  const { isDark } = useTheme();
  const location = useLocation();
  const locationPathname = location.pathname;
  const [active, setActive] = useState(false);

  return (
    <Box>
      <Navbar isBordered={isDark} variant="sticky">
        <Navbar.Brand>
          <CgUserlane size="2rem" margin="auto" color="pink" />
          <Burger active={active} setActive={setActive} />
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          <Navbar.Link
            style={{ color: "blue", fontWeight: "bolder", fontSize: "400px" }}
            isActive={locationPathname.includes("home")}
            color="inherit"
            href="/home"
          >
            About
          </Navbar.Link>
          <Navbar.Link
            isActive={locationPathname.includes("my-work")}
            href="/my-work"
          >
            My Work
          </Navbar.Link>
          <Navbar.Link href="" target="_blank">
            GitHub
          </Navbar.Link>
          <Navbar.Link
            href="https://drive.google.com/file/d/14X_kqQnNumMjSndY4ckbmAohFRebm1Gi/view?usp=sharing"
            target="_blank"
          >
            Resume
          </Navbar.Link>
        </Navbar.Content>
        <div style={{ color: "transparent" }}>somethinng</div>
        {active && <MobileNav active={active} setActive={setActive} />}
      </Navbar>
    </Box>
  );
};
export default NewNav;
