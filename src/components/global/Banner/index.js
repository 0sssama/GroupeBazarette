import { Carousel } from "components";
import banners from "data/banner.json";
import { useRouter } from "next/router";
import { useState } from "react";

function Banner() {
  // next.js router
  const router = useRouter();

  // current image state
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <Carousel
      active={{
        previous: true,
        next: true,
      }}
      className="Banner"
      onNext={() => {
        setCurrentImage((currentImage + 1) % banners.length);
      }}
      onPrevious={() => {
        setCurrentImage(
          currentImage === 0
            ? banners.length - 1
            : (currentImage - 1) % banners.length
        );
      }}
    >
      <div
        className="images cursor-pointer"
        onClick={() => router.push(banners[currentImage].url)}
      >
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner.image}
            alt="banner"
            className={`${
              index === currentImage
                ? "current"
                : index > currentImage
                ? "passed"
                : ""
            } covered-img`}
          />
        ))}
      </div>
    </Carousel>
  );
}

export default Banner;
