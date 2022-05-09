import Navbar from "./Navbar";
import { FiMenu } from "react-icons/fi";
import { windowState } from "atoms/states";
import { useRecoilValue } from "recoil";
import { Logo } from "components";

function Secondary() {
  // get scroll position
  const { scroll } = useRecoilValue(windowState);

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
        <div className="Header-ham-menu hide-for-desktop">
          <FiMenu />
        </div>
        <Navbar />
      </div>
    </div>
  );
}

export default Secondary;
