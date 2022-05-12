import Head from "next/head";
import { Banner, ProductCarousel } from "components";
import collections from "data/collections.json";
import getProducts from "utils/getProducts";

export default function Home({ products }) {
  console.log(products);
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
              main: collection,
            }}
            products={products
              .filter((product) => product.collection === collection)
              .slice(0, 10)}
            className="ProductCarousel"
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
