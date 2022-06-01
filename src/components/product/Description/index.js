import { useRecoilValue } from "recoil";
import { windowState } from "atoms/states";

function Description({ title, description, colors, collection, type }) {
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
        {description}. Disponible également en{" "}
        {colors.map((color, i) => (
          <span key={i}>
            {i === 0 ? "" : ", "}
            {color[1]}
          </span>
        ))}
        .
        {collection === "Vasco de Gama" && (
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
        {collection === "Antonio Ferre" && type === "Lunettes solaires" && (
          <>
            <br />
            <br />
            Les lunettes de soleil Antonio Ferre sont conçues pour offrir un
            style élégant et un confort ultime.
            <br />
            <br />
            Les lunettes de soleil Antonio Ferre sont le choix parfait pour ceux
            qui veulent avoir un look chic et être à l'aise.
          </>
        )}
      </p>
    </div>
  );
}

export default Description;
