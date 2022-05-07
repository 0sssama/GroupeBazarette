import { Section, Carousel, Product } from "components";

function ProductCarousel({ titles, products, className }) {
  return (
    <Section
      title={{
        sub: titles?.sub,
        main: titles?.main,
      }}
    >
      <Carousel
        active={{
          previous: false,
          next: true,
        }}
        className={className}
      >
        <div className="Products-wrapper flex items-start">
          {products.map((product, index) => (
            <Product key={index} data={product} />
          ))}
        </div>
      </Carousel>
    </Section>
  );
}

export default ProductCarousel;
