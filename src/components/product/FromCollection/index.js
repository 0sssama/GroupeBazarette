import { ProductCarousel } from "components";
import { useRecoilValue } from "recoil";
import { windowState } from "atoms/states";

function FromCollection({ products }) {
  // global width state
  const { width } = useRecoilValue(windowState);

  return (
    <div className="FromCollection Section w-full">
      <h2 className="ProductPage-description-title title primary w-full no-margin">
        Produits de la
        {width < 768 ? <br /> : <></>}
        <span>même collection</span>
      </h2>
      <ProductCarousel products={products} className="ProductCarousel" />
    </div>
  );
}

export default FromCollection;
