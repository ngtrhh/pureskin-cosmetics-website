import React from "react";

const Product = ({ item }) => {
  return (
    <div className="product">
      <div className="product__img">
        <img src={item.image01} alt="" />
      </div>
      <div className="product__info">
        <div className="product__info__title">
          {item.title.substring(0, 60)}
        </div>
        <div className="product__info__price">
          <div className="product__info__price__sale">
            <div className="product__info__price__sale__origin">
              {item.sale}.000 VNĐ
            </div>
            <div className="product__info__price__sale__percent">
              {item.percent}%
            </div>
          </div>
          <div className="product__info__price__new"> {item.price}.000 VNĐ</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
