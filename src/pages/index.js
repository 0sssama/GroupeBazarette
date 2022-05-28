import Head from "next/head";
import { Banner, ProductCarousel } from "components";
import collections from "data/collections.json";
import types from "data/types.json";
import getProducts from "utils/getProducts";

export default function Home({ products }) {
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
              main: collection.name,
            }}
            products={products
              .filter((product) => product.collectionName === collection.name)
              .slice(0, 10)}
            className="ProductCarousel"
            link={collection.link}
          />
        ))}
        {types.map((type, index) => (
          <ProductCarousel
            key={index}
            titles={{
              sub: "Type —",
              main: type.name,
            }}
            products={products
              .filter((product) => product.type === type.name)
              .slice(0, 10)}
            className="ProductCarousel"
            link={type.link}
          />
        ))}
      </div>
    </div>
  );
}

// function that fetches products from api
export async function getServerSideProps() {
  // get all products with getProducts and pass them as prop to the page
  const products = await getProducts();

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
