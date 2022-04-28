import Head from "next/head";
import { Carousel, Product, Section } from "components";

export default function Home() {
  return (
    <div className="Home Page wrapper">
      <Head>
        <title>
          Groupe Bazarette - Lunettes, lunettes de soleil et lentilles
        </title>
      </Head>
      <div className="container w-full padding-x text-center">
        <Carousel
          active={{
            previous: true,
            next: true,
          }}
        >
          <img
            src="/assets/placeholders/placeholder.png"
            alt="banner"
            className="covered-img"
          />
        </Carousel>
        <Section
          title={{
            sub: "Collection —",
            main: "Vasco de Gama",
          }}
        >
          <Carousel
            active={{
              previous: false,
              next: true,
            }}
          >
            <div className="Products-wrapper flex items-start">
              <Product
                data={{
                  name: "Produit Lunettes De Vue",
                  price: "100",
                  image: "/assets/placeholders/product.jpeg",
                }}
              />
              <Product
                data={{
                  name: "Produit Lunettes De Vue",
                  price: "100",
                  image: "/assets/placeholders/product2.jpeg",
                }}
              />
              <Product
                data={{
                  name: "Produit Lunettes De Vue",
                  price: "100",
                  image: "/assets/placeholders/product3.jpeg",
                }}
              />
              <Product
                data={{
                  name: "Produit Lunettes De Vue",
                  price: "100",
                  image: "/assets/placeholders/product4.jpeg",
                }}
              />
              <Product
                data={{
                  name: "Produit Lunettes De Vue",
                  price: "100",
                  image: "/assets/placeholders/product.jpeg",
                }}
              />
            </div>
          </Carousel>
        </Section>
        <Section
          title={{
            sub: "Collection —",
            main: "Antonio Ferre",
          }}
        >
          <Carousel
            active={{
              previous: false,
              next: true,
            }}
          >
            <div className="Products-wrapper flex items-start">
              <Product
                data={{
                  name: "Produit Lunettes Solaires",
                  price: "100",
                  image: "/assets/placeholders/product5.jpeg",
                }}
              />
              <Product
                data={{
                  name: "Produit Lunettes Solaires",
                  price: "100",
                  image: "/assets/placeholders/product6.jpeg",
                }}
              />
              <Product
                data={{
                  name: "Produit Lunettes Solaires",
                  price: "100",
                  image: "/assets/placeholders/product7.jpeg",
                }}
              />
              <Product
                data={{
                  name: "Produit Lunettes Solaires",
                  price: "100",
                  image: "/assets/placeholders/product8.jpeg",
                }}
              />
              <Product
                data={{
                  name: "Produit Lunettes Solaires",
                  price: "100",
                  image: "/assets/placeholders/product5.jpeg",
                }}
              />
            </div>
          </Carousel>
        </Section>
      </div>
    </div>
  );
}
