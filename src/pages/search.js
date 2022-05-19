import { Input, Product } from "components";
import Head from "next/head";
import { useEffect, useState } from "react";
import getProducts from "utils/getProducts";

function Search({ products }) {
  // state of search query
  const [query, setQuery] = useState("");

  // state of products searched for
  const [queryProducts, setQueryProducts] = useState([]);

  useEffect(() => {
    if (query.length === 0) {
      setQueryProducts([]);
      return;
    }

    // filter products by query using regex
    const regex = new RegExp(query, "i");
    const filteredProducts = products.filter(
      (product) =>
        regex.test(product.title) ||
        regex.test(product.type) ||
        regex.test(product.reference) ||
        regex.test(product.description) ||
        regex.test(product.matiere) ||
        regex.test(product.gender) ||
        regex.test(product.collectionName)
    );
    setQueryProducts(filteredProducts);
  }, [query, products]);

  return (
    <div className="Search Page wrapper padding-x">
      <Head>
        <title>Rechercher sur GroupeBazarette</title>
      </Head>
      <div className="Search-Header w-full flex flex-col items-center padding-x text-center">
        <h1 className="title primary font-sora text-center">
          Rechercher sur GroupeBazarette
        </h1>
        <Input
          placeholder="Antonio Ferre, Vasco de Gama..."
          type="text"
          value={query}
          className="search-input"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="Produits-grid Section">
        {queryProducts.length === 0 ? (
          <div className="Produits-grid-empty text-center flex flex-col items-center row-gap">
            <h2 className="text text-center">
              Votre requête de recherche ne correspond à aucun de nos produits
            </h2>
          </div>
        ) : (
          queryProducts.map((product) => (
            <Product key={product._id} data={product} />
          ))
        )}
      </div>
    </div>
  );
}

export default Search;

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
