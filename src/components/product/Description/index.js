import { useRecoilValue } from "recoil";
import { windowState } from "atoms/states";

function Description({ title, description, colors, matiere }) {
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
        <br />
        <br />
        La face en {matiere} découpée et surpiquée apporte à cette monture ronde
        tune pointe d'originalité ! Vous pouvez personnaliser votre MAGIC grâce
        à son panel de clips. Disponible également en noir/or et beige/or.
        <br />
        <br />
        La face en {matiere} découpée et surpiquée apporte à cette monture ronde
        tune pointe d'originalité ! Vous pouvez personnaliser.
      </p>
    </div>
  );
}

export default Description;
