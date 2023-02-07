import { HeartOutline, HeartFill, BookmarkIcon } from "../Icons/index";
import { Rate } from "antd";
import { useState } from "react";

const Card = ({ item }) => {
  const [addWishlist, setWishlist] = useState(false);

  return (
    <div className="cart">
      <div className="container-product-list">
        <div className="cart__img">
          <img src={item.image01} alt="" />
          <div
            className="cart__wishlist"
            onClick={() => {
              setWishlist(!addWishlist);
            }}
            style={{
              color: addWishlist ? "#5A4C9F" : "#79747e",
            }}
          >
            {addWishlist ? <HeartFill /> : <HeartOutline />}
          </div>
        </div>

        <div className="cart__body">
          <div className="cart__body__title">
            <span>{item.title.substring(0, 60)}</span>
          </div>
          <div className="cart__body__price">
            <div className="cart__body__price__origin">
              {item.price}.000 VNĐ
            </div>
            <div className="cart__body__price__sale">{item.sale}.000 VNĐ</div>
          </div>
          <div className="cart__body__rating">
            <Rate allowHalf disabled defaultValue={item.stars} />
          </div>
        </div>

        <div className="btn">
          <div className="btn__content">Mua hàng</div>
        </div>
        <div className="cart__sale">
          <BookmarkIcon />
          <div className="cart__sale__percent">{item.percent}%</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
