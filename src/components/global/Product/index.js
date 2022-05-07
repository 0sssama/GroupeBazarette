import Link from "next/link";

function Product({ data }) {
  return (
    <Link href={`/product/${data.slug}`}>
      <a className="Product flex flex-col items-center row-gap no-line">
        <div className="Product-image">
          <img src={data.image} alt="product" className="covered-img" />
        </div>
        <div className="Product-name">
          <p>{data.name}</p>
        </div>
        <div className="Product-price">€{data.price}</div>
      </a>
    </Link>
  );
}

export default Product;
