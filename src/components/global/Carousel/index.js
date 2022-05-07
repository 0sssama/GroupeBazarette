import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

function Carousel({ onPrevious, onNext, active, children, className }) {
  return (
    <div
      className={`Carousel w-full flex items-center justify-center ${className}`}
    >
      <div className="Carousel-previous Carousel-nav h-full flex items-center justify-center">
        <div
          className={`nav-icon ${active?.previous ? "active" : ""}`}
          onClick={onPrevious}
        >
          <BiChevronLeft />
        </div>
      </div>
      <div className="Carousel-wrapper w-full h-full items-center justify-center">
        {children}
      </div>
      <div className="Carousel-next Carousel-nav h-full flex items-center justify-center">
        <div
          className={`nav-icon ${active?.next ? "active" : ""}`}
          onClick={onNext}
        >
          <BiChevronRight />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
