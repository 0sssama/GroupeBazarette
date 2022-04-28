import { windowState } from "atoms/states";
import Head from "next/head";
import { useRecoilValue } from "recoil";
import { Carousel, Product } from "components";

export default function Home() {
  // screen width
  const { width } = useRecoilValue(windowState);

  return (
    <div className="Home Page wrapper">
      <Head>
        <title>
          Groupe Bazarette - Lunettes, lunettes de soleil et lentilles
        </title>
      </Head>
      <div className="container w-full padding-x text-center">
        <Carousel
          active={{
            previous: false,
            next: true,
          }}
        >
          <img
            src="/assets/placeholders/placeholder.png"
            alt="banner"
            className="covered-img"
          />
        </Carousel>
        <Product
          data={{
            name: "Produit Lunettes De Vue",
            price: "100",
            image: "/assets/placeholders/product.jpeg",
          }}
        />
        <p className="title primary">Welcome to Groupe Bazarette</p>
        <p className="title secondary">current width : {width}</p>
      </div>
    </div>
  );
}
