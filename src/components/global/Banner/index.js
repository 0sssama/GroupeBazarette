import { Carousel } from "components";

function Banner() {
  return (
    <Carousel
      active={{
        previous: true,
        next: true,
      }}
      className="Banner"
    >
      <img
        src="/assets/placeholders/placeholder.png"
        alt="banner"
        className="covered-img"
      />
    </Carousel>
  );
}

export default Banner;
