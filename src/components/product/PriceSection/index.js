import { useState } from "react";
import { BsHeart, BsHeartFill, BsStarHalf } from "react-icons/bs";

function PriceSection({ price }) {
  // liked state
  const [liked, setLiked] = useState(false);

  return (
    <div className="ProductPage-main-name-price w-full flex items-center justify-between">
      <p className="title tertiary">€{price}</p>
      <div className="icons flex items-end justify-end">
        <div
          className="icon flex flex-col items-center"
          onClick={() => setLiked(!liked)}
        >
          {liked ? <BsHeartFill /> : <BsHeart />}
          <p className="text">{liked ? 130 : 129}</p>
        </div>
        <div className="icon flex flex-col items-center review">
          <BsStarHalf />
          <p className="text">Review</p>
        </div>
      </div>
    </div>
  );
}

export default PriceSection;
