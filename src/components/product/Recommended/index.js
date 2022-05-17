import { ProductCarousel } from "components";
import { useRecoilValue } from "recoil";
import { windowState } from "atoms/states";

function Recommended({ products }) {
  // global width state
  const { width } = useRecoilValue(windowState);

  return (
    <div className="Recommended Section w-full">
      <h2 className="ProductPage-description-title title primary w-full no-margin">
        Produits
        {width < 768 ? <br /> : <></>}
        <span>recommandés</span>
      </h2>
      <ProductCarousel products={products} className="ProductCarousel" />
    </div>
  );
}

export default Recommended;
