import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <a className="Logo">
        <p>
          GROUPE
          <span>BAZARETTE</span>
        </p>
      </a>
    </Link>
  );
}

export default Logo;
