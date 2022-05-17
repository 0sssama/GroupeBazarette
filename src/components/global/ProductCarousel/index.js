import { windowState } from "atoms/states";
import { Section, Carousel, Product } from "components";
import Link from "next/link";
import { useState } from "react";
import { MdArrowForward } from "react-icons/md";
import { useRecoilValue } from "recoil";

function ProductCarousel({ titles, products, className, link }) {
  // get width of screen
  const { width } = useRecoilValue(windowState);

  // width of product image
  const productWidth = width > 768 ? 400 : 250;

  // iteration count
  // const itCount = width > 768 ? 4 : 1;
  const itCount = 1;

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
          if (current < products.length - itCount) {
            setCurrent(current + itCount);
          }
        }}
        onPrevious={() => {
          if (current > itCount - 1) {
            setCurrent(current - itCount);
          }
        }}
        className={className}
      >
        <div
          className="Products-wrapper flex items-start"
          style={{
            transform: `translateX(${current * -productWidth}px)`,
          }}
        >
          {products.map((product, index) => (
            <Product key={index} data={product} />
          ))}
        </div>
      </Carousel>
      {link && (
        <div className="Discover w-full flex justify-end items-center">
          <Link href={link}>
            <a className="Discover-link flex items-center col-gap-s with-line">
              Découvrir plus
              <MdArrowForward />
            </a>
          </Link>
        </div>
      )}
    </Section>
  );
}

export default ProductCarousel;
