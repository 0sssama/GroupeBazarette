import { useEffect, useState } from "react";
import { Button } from "components";

const categories = ["Tous", "Vasco de Gama", "Antonio Ferre"];

const genres = ["Tous", "Homme", "Femme"];

function SortMenu({ originalProducts, products, setProducts }) {
  const [category, setCategory] = useState(0);
  const [genre, setGenre] = useState(0);

  useEffect(() => {
    if (category === 0 && genre === 0) {
      setProducts(originalProducts);
    } else if (genre === 0) {
      setProducts(
        originalProducts.filter(
          (product) => product.collectionName === categories[category]
        )
      );
    } else if (category === 0) {
      setProducts(
        originalProducts.filter((product) => product.gender === genres[genre])
      );
    } else {
      setProducts(
        originalProducts.filter(
          (product) =>
            product.collectionName === categories[category] &&
            product.gender === genres[genre]
        )
      );
    }
  }, [category, genre]);

  return (
    <div className="SortMenu w-full flex flex-col items-end justify-end flex-wrap col-gap row-gap-s padding-x">
      <p className="text">Affiner votre recherche</p>
      <div className="SortMenu-wrap flex flex-col items-end row-gap-s">
        <div className="SortMenu-categories flex items-center col-gap-s">
          {categories.map((cat, key) => (
            <Button
              key={key}
              type={key === category ? "primary" : "secondary"}
              onClick={() => setCategory(key)}
            >
              {cat}
            </Button>
          ))}
        </div>
        <div className="line hide-for-mobile"></div>
        <div className="SortMenu-genres flex items-center col-gap-s">
          {genres.map((gen, key) => (
            <Button
              key={key}
              type={key === genre ? "primary" : "secondary"}
              onClick={() => setGenre(key)}
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
