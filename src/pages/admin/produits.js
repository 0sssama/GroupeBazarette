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
        {products.map((product, key) => (
          <Product key={key} data={product} />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  // get all products with getProducts and pass them as prop to the page
  const products = await getProducts();

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}

export default Produits;
