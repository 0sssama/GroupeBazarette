import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

function Item({ title, url }) {
  return (
    <Link href={url}>
      <a className="no-line">
        <div className="Header-nav-item flex items-center col-gap-s">
          <p>{title}</p>
          {/* <FiChevronDown /> */}
        </div>
      </a>
    </Link>
  );
}

export default Item;
