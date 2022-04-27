import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

function Header() {
  return (
    <div className="Header fixed top-0 left-0 right-0 flex items-center justify-center">
      <div className="Header-wrapper wrapper padding-x flex flex-col items-center justify-between">
        <div className="Header-logo w-full flex items-center justify-center">
          <Link href="/">
            <a>
              <p>
                GROUPE
                <span>BAZARETTE</span>
              </p>
            </a>
          </Link>
        </div>
        <div className="Header-nav w-full flex items-center justify-center">
          <div className="Header-nav-item flex items-center col-gap-s">
            <p>LUNETTES DE SOLEIL</p>
            <BsChevronDown />
          </div>
          <div className="Header-nav-item flex items-center col-gap-s">
            <p>LUNETTES DE VUE</p>
            <BsChevronDown />
          </div>
          <div className="Header-nav-item flex items-center col-gap-s">
            <p>OFFRES</p>
            <BsChevronDown />
          </div>
          <div className="Header-nav-item flex items-center col-gap-s">
            <p>NOUVEAUTÉS</p>
            <BsChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
