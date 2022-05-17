import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { useRecoilValue } from "recoil";
import { windowState } from "atoms/states";

function ImageSection({ setCurrentImage, currentImage, product }) {
  // get global state of width
  const { width } = useRecoilValue(windowState);

  // widgth of secondary image
  const secondaryWidth = width > 768 ? 70 : 50;

  return (
    <div className="ProductPage-main-image flex flex-col items-center w-full">
      <div className="ProductPage-main-image-main flex items-center justify-between w-full">
        <div
          className={`ProductPage-main-image-main-navigation previous ${
            currentImage === 0 ? "disabled" : ""
          }`}
          onClick={() =>
            setCurrentImage(currentImage === 0 ? 0 : currentImage - 1)
          }
        >
          <BsChevronLeft />
        </div>
        <div className="ProductPage-main-image-main-image">
          <img
            src={`/assets/products/${product.pictures[currentImage][0]}`}
            alt={product.title}
            className="covered-img"
          />
        </div>
        <div
          className={`ProductPage-main-image-main-navigation next ${
            currentImage === product.pictures.length - 1 ? "disabled" : ""
          }`}
          onClick={() =>
            setCurrentImage(
              currentImage === product.pictures.length - 1
                ? currentImage
                : currentImage + 1
            )
          }
        >
          <BsChevronRight />
        </div>
      </div>
      <div
        className="ProductPage-main-image-secondary flex items-center justify-start w-full"
        style={{
          transform: `translateX(${currentImage * -secondaryWidth}px)`,
        }}
      >
        {product.pictures.map((picture, i) => (
          <div
            key={i}
            className={`ProductPage-main-image-secondary-image ${
              i === currentImage ? "active" : ""
            }`}
            onClick={() => setCurrentImage(i)}
          >
            <img
              src={`/assets/products/${picture[0]}`}
              alt={product.title}
              className="covered-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSection;
