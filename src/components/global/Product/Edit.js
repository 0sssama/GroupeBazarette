import { AiFillEdit } from "react-icons/ai";

function ProductEdit({ data, onEditClick }) {
  return (
    <div className="Product flex flex-col items-center row-gap no-line">
      <div className="Product-image relative">
        <div
          className="Product-image-edit flex items-center col-gap-s"
          onClick={onEditClick}
        >
          <AiFillEdit />
          <p>Modifier</p>
        </div>
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
    </div>
  );
}

export default ProductEdit;
