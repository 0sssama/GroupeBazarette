import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import Navbar from "./Navbar";

function Primary() {
  return (
    <div className="Header Header-Primary relative flex items-center justify-center">
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
        <Navbar />
      </div>
    </div>
  );
}

export default Primary;
