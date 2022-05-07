import nav from "data/nav.json";
import Item from "./Item";

function Navbar() {
  return (
    <div className="Header-nav w-full flex items-center justify-center flex-wrap hide-for-mobile">
      {nav.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </div>
  );
}

export default Navbar;
