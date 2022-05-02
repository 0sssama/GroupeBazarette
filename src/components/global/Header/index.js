import Link from "next/link";
import { FiChevronDown, FiMenu } from "react-icons/fi";

function Header() {
  return (
    <div className="Header relative flex items-center justify-center">
      <div className="Header-wrapper wrapper padding-x flex items-center justify-between">
        <div className="Header-logo flex items-center justify-center">
          <Link href="/">
            <a>
              <p>
                GROUPE
                <span>BAZARETTE</span>
              </p>
            </a>
          </Link>
        </div>
        <div className="Header-ham-menu hide-for-desktop">
          <FiMenu />
        </div>
        <div className="Header-nav w-full flex items-center justify-center flex-wrap hide-for-mobile">
          <div className="Header-nav-item flex items-center col-gap-s">
            <p>LUNETTES DE SOLEIL</p>
            <FiChevronDown />
          </div>
          <div className="Header-nav-item flex items-center col-gap-s">
            <p>LUNETTES DE VUE</p>
            <FiChevronDown />
          </div>
          <div className="Header-nav-item flex items-center col-gap-s">
            <p>OFFRES</p>
            <FiChevronDown />
          </div>
          <div className="Header-nav-item flex items-center col-gap-s">
            <p>NOUVEAUTÉS</p>
            <FiChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
