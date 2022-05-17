import { useEffect, useState } from "react";
import getProducts, { getProductById } from "utils/getProducts";
import Head from "next/head";
import {
  ImageSection,
  NameSection,
  PriceSection,
  ColorsSection,
  Description,
  Recommended,
  FromCollection,
} from "components/product";
import { Button } from "components";

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function Product({ product, products, shuffledProducts }) {
  // state of current image
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="ProductPage Page wrapper padding-x">
      <Head>
        <title>{product.title} - GroupeBazarette</title>
      </Head>
      <div className="ProductPage-main flex flex-col items-center w-full">
        <ImageSection
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          product={product}
        />
        <div className="ProductPage-main-name w-full padding-x">
          <NameSection
            collection={product.collectionName}
            reference={product.reference}
            title={product.title}
          />
          <PriceSection price={product.price} />
          <ColorsSection
            colors={product.pictures}
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
          />
          <div className="button-wrapper w-full">
            <Button
              type="primary"
              className="w-full"
              onClick={() => {
                console.log("rigl");
              }}
            >
              ACHETER MAINTENANT
            </Button>
          </div>
        </div>
      </div>
      <div className="ProductPage-description w-full Section">
        <Description
          title={product.title}
          description={product.description}
          colors={product.pictures}
          matiere={product.matiere}
        />
        <Recommended products={shuffledProducts.slice(0, 10)} />
        <FromCollection
          products={products
            .filter((p) => p.collectionName === product.collectionName)
            .slice(0, 10)}
        />
      </div>
    </div>
  );
}

export default Product;

// get all products with getProducts and return their ids as static paths
export async function getStaticPaths() {
  const products = await getProducts();

  const paths = products.map((product) => ({
    params: {
      id: product._id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

// get product by id with getProductById and return it as a static prop
export async function getStaticProps({ params }) {
  const product = await getProductById(params.id);
  const products = await getProducts();

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      products: JSON.parse(JSON.stringify(products)),
      shuffledProducts: shuffleArray(JSON.parse(JSON.stringify(products))),
    },
  };
}
