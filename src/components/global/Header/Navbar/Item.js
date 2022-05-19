import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";

function Item({ title, url }) {
  return (
    <Link href={url}>
      <a className="no-line">
        <div className="Header-nav-item flex items-center col-gap-s">
          {title === "SEARCH" ? (
            <p className="search-nav">
              <BiSearch />
            </p>
          ) : (
            <p>{title}</p>
          )}
          {/* <FiChevronDown /> */}
        </div>
      </a>
    </Link>
  );
}

export default Item;
