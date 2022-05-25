import { Product, Button, SortMenu } from "components";
import Head from "next/head";
import { getProductsByType } from "utils/getProducts";
import { MdArrowBack } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/router";

function LunettesSolaires({ products }) {
  // next.js router
  const router = useRouter();

  // visible products state
  const [visibleProducts, setVisibleProducts] = useState(products);

  return (
    <div className="Produits Page wrapper padding-x flex flex-col items-start row-gap">
      <Head>
        <title>Lunettes solaires - GroupeBazarette</title>
      </Head>
      <h1 className="title primary">Lunettes solaires</h1>
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
              Essayez d'affiner votre recherche en haut ou retournez à la page
              d'accueil.
            </p>
            <Button type="primary" onClick={() => router.push("/")}>
              <span className="back">
                <MdArrowBack />
              </span>
              Retour à la page d'accueil
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  // get all products with getProducts and pass them as prop to the page
  const products = await getProductsByType("Lunettes solaires");

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}

export default LunettesSolaires;
