import Navbar from "./Navbar";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { windowState, menuState } from "atoms/states";
import { useRecoilValue, useRecoilState } from "recoil";
import { Logo } from "components";

function Secondary() {
  // get scroll position
  const { scroll } = useRecoilValue(windowState);

  // importing state of menu
  const [menuOpen, setMenuOpen] = useRecoilState(menuState);

  return (
    <div
      className={`Header Header-Secondary fixed top-0 left-0 right-0 flex items-center justify-center ${
        scroll > 200 ? "is-scrolled" : ""
      }`}
    >
      <div className="Header-wrapper wrapper padding-x flex items-center justify-between">
        <div className="Header-logo flex items-center justify-center hide-for-desktop">
          <Logo />
        </div>
        <div
          className="Header-ham-menu hide-for-desktop cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <MdClose /> : <FiMenu />}
        </div>
        <Navbar />
      </div>
    </div>
  );
}

export default Secondary;
