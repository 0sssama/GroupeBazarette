import { Product, Button } from "components";
import Head from "next/head";
import { getProductsByCollection } from "utils/getProducts";
import { MdArrowBack } from "react-icons/md";

function VascoDeGama({ products }) {
  return (
    <div className="Produits Page wrapper padding-x flex flex-col items-start row-gap">
      <Head>
        <title>Vasco de Gama - GroupeBazarette</title>
      </Head>
      <h1 className="title primary">Vasco de Gama</h1>
      <div className="Produits-grid">
        {products.map((product, key) => (
          <Product key={key} data={product} />
        ))}
        {products.length === 0 && (
          <div className="Produits-grid-empty text-center flex flex-col items-center row-gap">
            <h2 className="title tertiary text-center">Aucun produit trouvé</h2>
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
  const products = await getProductsByCollection("Vasco de Gama");

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}

export default VascoDeGama;
