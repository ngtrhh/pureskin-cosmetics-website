const Product = ({ item }) => {
  return (
    <div className="cart-mobile">
      <div className="cart-mobile__img">
        <img src={item.image01} alt="" />
      </div>
      <div className="cart-mobile__info">
        <div className="cart-mobile__info__title">
          {item.title.substring(0, 60)}
        </div>
        <div className="cart-mobile__info__price">
          <div className="cart-mobile__info__price__sale">
            <div className="cart-mobile__info__price__sale__origin">
              {item.sale}.000 VNĐ
            </div>
            <div className="cart-mobile__info__price__sale__percent">
              {item.percent}%
            </div>
          </div>
          <div className="cart-mobile__info__price__new">
            {item.price}.000 VNĐ
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
