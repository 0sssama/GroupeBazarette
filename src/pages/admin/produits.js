import { Logo, Product } from "components";
import Head from "next/head";
import getProducts from "utils/getProducts";
import { useEffect } from "react";

function Produits({ products }) {
  // remove header on page render
  useEffect(() => {
    // hiding both headers
    const headers = document.querySelectorAll(".Header");
    headers.forEach((header) => {
      header.classList.add("display-none-important");
    });

    // hiding footer
    document
      .querySelector("footer.Footer")
      .classList.add("display-none-important");
  }, []);

  return (
    <div className="Produits Page wrapper padding-x flex flex-col items-start row-gap">
      <Head>
        <title>Les produits - GroupeBazarette</title>
      </Head>
      <Logo />
      <h1 className="title primary">Produits</h1>
      <div className="Produits-grid">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // get all products with getProducts and pass them as prop to the page
  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
}

export default Produits;
