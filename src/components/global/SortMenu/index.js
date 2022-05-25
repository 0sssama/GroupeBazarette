import { useState } from "react";
import { Button } from "components";

const categories = ["Tous", "Vasco De Gama", "Antonio Ferre"];

const genres = ["Tous", "Hommes", "Femmes"];

function SortMenu({ originalProducts, products, setProducts }) {
  const [category, setCategory] = useState(0);
  const [genre, setGenre] = useState(0);

  return (
    <div className="SortMenu w-full flex flex-col items-end justify-end flex-wrap col-gap row-gap-s padding-x">
      <p className="text">Affiner votre recherche</p>
      <div className="SortMenu-wrap flex flex-col items-end row-gap-s">
        <div className="SortMenu-categories flex items-center col-gap-s">
          {categories.map((cat, key) => (
            <Button
              key={key}
              type={key === category ? "primary" : "secondary"}
              onClick={() => {
                setCategory(key);
                setProducts(originalProducts);
              }}
            >
              {cat}
            </Button>
          ))}
        </div>
        <div className="SortMenu-genres flex items-center col-gap-s">
          {genres.map((gen, key) => (
            <Button
              key={key}
              type={key === genre ? "primary" : "secondary"}
              onClick={() => {
                setGenre(key);
                setProducts(originalProducts);
              }}
            >
              {gen}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SortMenu;
