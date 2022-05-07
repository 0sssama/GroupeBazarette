import { windowState } from "atoms/states";
import { Section, Carousel, Product } from "components";
import { useState } from "react";
import { useRecoilValue } from "recoil";

function ProductCarousel({ titles, products, className }) {
  // get width of screen
  const { width } = useRecoilValue(windowState);

  // width of product image
  const produtWidth = width > 768 ? 300 : 200;

  // current product
  const [current, setCurrent] = useState(0);

  return (
    <Section
      title={{
        sub: titles?.sub,
        main: titles?.main,
      }}
    >
      <Carousel
        active={{
          previous: current !== 0,
          next: current !== products.length - 1,
        }}
        onNext={() => {
          if (current < products.length - 1) {
            setCurrent(current + 1);
          }
        }}
        onPrevious={() => {
          if (current > 0) {
            setCurrent(current - 1);
          }
        }}
        className={className}
      >
        <div
          className="Products-wrapper flex items-start"
          style={{
            transform: `translateX(${current * -produtWidth}px)`,
          }}
        >
          {products.map((product, index) => (
            <Product key={index} data={product} />
          ))}
        </div>
      </Carousel>
    </Section>
  );
}

export default ProductCarousel;
