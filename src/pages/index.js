import Head from "next/head";
import { Banner, ProductCarousel } from "components";
import collections from "data/collections.json";

export default function Home() {
  return (
    <div className="Home Page wrapper">
      <Head>
        <title>
          Groupe Bazarette - Lunettes, lunettes de soleil et lentilles
        </title>
      </Head>
      <div className="container w-full padding-x text-center">
        <Banner />
        {collections.map((collection, index) => (
          <ProductCarousel
            key={index}
            titles={{
              sub: "Collection —",
              main: collection.title,
            }}
            products={collection.products}
            className="ProductCarousel"
          />
        ))}
      </div>
    </div>
  );
}
