import { useRecoilValue } from "recoil";
import { windowState } from "atoms/states";

function Description({ title, description, colors, matiere, collection }) {
  // global width state
  const { width } = useRecoilValue(windowState);

  return (
    <div className="ProductPage-description-description">
      <h2 className="ProductPage-description-title title primary w-full">
        Caracteristiques de
        {width < 768 ? <br /> : <></>}
        <span>{title}</span>
      </h2>
      <p className="ProductPage-description-text text">
        {description}. La face en {matiere} découpée et surpiquée apporte à
        cette monture ronde tune pointe d'originalité ! Vous pouvez
        personnaliser votre MAGIC grâce à son panel de clips. Disponible
        également en{" "}
        {colors.map((color, i) => (
          <span key={i}>
            {i === 0 ? "" : ", "}
            {color[1]}
          </span>
        ))}
        .
        {collection === "Vasco De Gama" && (
          <>
            <br />
            <br />
            Vasco De Gamma est une marque de lunettes solaires haut de gamme qui
            offre des lunettes de soleil de qualité à un prix abordable. Les
            lunettes de soleil Vasco De Gamma sont fabriquées à partir de
            matériaux de haute qualité et sont conçues pour offrir une
            protection optimale contre les rayons nocifs du soleil.
          </>
        )}
      </p>
    </div>
  );
}

export default Description;
