function ColorsSection({ colors, currentImage, setCurrentImage }) {
  return (
    <div className="ProductPage-main-name-colors w-full">
      {colors.map((color, i) => (
        <div
          key={i}
          className={`ProductPage-main-name-colors-color flex flex-col items-center ${
            i === currentImage ? "active" : ""
          }`}
          onClick={() => setCurrentImage(i)}
        >
          <img src={`/assets/products/${color[0]}`} alt={color[1]} />
          <p className="text">{color[1]}</p>
        </div>
      ))}
    </div>
  );
}

export default ColorsSection;
