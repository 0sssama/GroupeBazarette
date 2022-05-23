import Navbar from "./Navbar";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { menuState } from "atoms/states";
import { useRecoilState } from "recoil";
import { Logo } from "components";

function Primary() {
  // importing state of menu
  const [menuOpen, setMenuOpen] = useRecoilState(menuState);

  return (
    <div className="Header Header-Primary relative flex items-center justify-center">
      <div className="Header-wrapper wrapper padding-x flex items-center justify-between">
        <div className="Header-logo flex items-center justify-center">
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

export default Primary;
