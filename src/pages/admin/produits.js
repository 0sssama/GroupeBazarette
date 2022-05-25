import { Logo, Product, Button, SortMenu } from "components";
import Head from "next/head";
import getProducts from "utils/getProducts";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { HiPlus } from "react-icons/hi";

function Produits({ products }) {
  // next.js router
  const router = useRouter();

  // visible products state
  const [visibleProducts, setVisibleProducts] = useState(products);

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
      <SortMenu
        originalProducts={products}
        products={visibleProducts}
        setProducts={setVisibleProducts}
      />
      <div className="Produits-grid">
        {visibleProducts.map((product, key) => (
          <Product key={key} data={product} />
        ))}
        {visibleProducts.length === 0 && (
          <div className="Produits-grid-empty text-center flex flex-col items-center row-gap">
            <h2 className="title tertiary text-center">Aucun produit trouvé</h2>
            <p className="text">
              Essayez d'affiner votre recherche en haut ou ajouter d'autres
              produits.
            </p>
            <Button
              type="primary"
              onClick={() => router.push("/admin/ajouter")}
            >
              <span className="back">
                <HiPlus />
              </span>
              Ajouter un produit
            </Button>
          </div>
        )}
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
