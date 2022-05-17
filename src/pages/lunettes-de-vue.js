import { Product } from "components";
import Head from "next/head";
import getProductsByType from "utils/getProducts";

function LunettesDeVue({ products }) {
  return (
    <div className="Produits Page wrapper padding-x flex flex-col items-start row-gap">
      <Head>
        <title>Lunettes de vue - GroupeBazarette</title>
      </Head>
      <h1 className="title primary">Lunettes de vue</h1>
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
  const products = await getProductsByType("Lunettes de vue");

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}

export default LunettesDeVue;
