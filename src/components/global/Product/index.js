import Link from "next/link";

function Product({ data }) {
  return (
    <Link href={`/product/${data?._id}`}>
      <a className="Product flex flex-col items-center row-gap no-line">
        <div className="Product-image">
          <img
            src={`/assets/products/${data?.pictures[0][0]}`}
            alt="product"
            className="covered-img"
          />
        </div>
        <div className="Product-name">
          <p>
            {data?.title} - Ref. {data?.reference}
          </p>
        </div>
        <div className="Product-price">€{data?.price}</div>
      </a>
    </Link>
  );
}

export default Product;
