import { useState } from "react";
import getProducts, { getProductById } from "utils/getProducts";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import Head from "next/head";

function Product({ product }) {
  // state of current image
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="ProductPage Page wrapper padding-x">
      <Head>
        <title>{product.title} - GroupeBazarette</title>
      </Head>
      <div className="ProductPage-main flex flex-col items-center w-full">
        <div className="ProductPage-main-image flex flex-col items-center w-full">
          <div className="ProductPage-main-image-main flex items-center justify-between w-full">
            <div
              className={`ProductPage-main-image-main-navigation previous ${
                currentImage === 0 ? "disabled" : ""
              }`}
              onClick={() =>
                setCurrentImage(currentImage === 0 ? 0 : currentImage - 1)
              }
            >
              <BsChevronLeft />
            </div>
            <div className="ProductPage-main-image-main-image">
              <img
                src={`/assets/products/${product.pictures[currentImage][0]}`}
                alt={product.title}
                className="covered-img"
              />
            </div>
            <div
              className={`ProductPage-main-image-main-navigation next ${
                currentImage === product.pictures.length - 1 ? "disabled" : ""
              }`}
              onClick={() =>
                setCurrentImage(
                  currentImage === product.pictures.length - 1
                    ? currentImage
                    : currentImage + 1
                )
              }
            >
              <BsChevronRight />
            </div>
          </div>
          <div className="ProductPage-main-image-secondary flex items-center justify-start w-full">
            {product.pictures.map((picture, i) => (
              <div
                key={i}
                className={`ProductPage-main-image-secondary-image ${
                  i === currentImage ? "active" : ""
                }`}
                onClick={() => setCurrentImage(i)}
              >
                <img
                  src={`/assets/products/${picture[0]}`}
                  alt={product.title}
                  className="covered-img"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="ProductPage-main-name">
          <div className="ProductPage-main-name-title w-full flex flex-col items-start row-gap-s">
            <p className="text">{product.collectionName}</p>
            <h1 className="title primary">{product.title}</h1>
          </div>
        </div>
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
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
