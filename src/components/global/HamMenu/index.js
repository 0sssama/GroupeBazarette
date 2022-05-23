import { menuState, windowState } from "atoms/states";
import { useRecoilState, useRecoilValue } from "recoil";
import Link from "next/link";
import { useRouter } from "next/router";
import nav from "data/nav.json";
import { BiSearch } from "react-icons/bi";

function HamMenu() {
  //next.js router
  const router = useRouter();

  // importing state of menu
  const [menuOpen, setMenuOpen] = useRecoilState(menuState);

  // scroll global state, to add class when user scrolls
  const { scroll } = useRecoilValue(windowState);

  return (
    <div
      className={`HamMenu hide-for-desktop ${menuOpen ? "open" : ""} ${
        scroll > 20 ? "scrolled" : ""
      } flex flex-col justify-between w-full`}
    >
      <div className="HamMenu-Nav w-full flex flex-col items-start justify-end">
        <ul className="nav flex flex-col items-start w-full">
          {nav.map((item, i) => (
            <li
              className={router.pathname === item.url ? "active" : ""}
              key={i}
            >
              <Link href={item.url}>
                <a
                  className="no-line flex items-center col-gap-s"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.title === "SEARCH" && (
                    <p className="search-nav">
                      <BiSearch />
                    </p>
                  )}
                  <p>{item.title}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HamMenu;
