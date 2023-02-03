import React, { useState, useEffect, useCallback } from "react";
import { COLORS } from "../constants.jsx";
import PropTypes from "prop-types";
import { Rate } from "antd";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Input } from "antd";
// import { withRouter } from "react-router";
// import { useDispatch } from "react-redux";
import styled from "styled-components";
// import { addItem } from '../redux/shopping-cart/cartItemsSlide'
// import { remove } from '../redux/product-modal/productModalSlice'
const Top = styled.div`
  width: 100%;
  position: relative;

  &:affter {
    content: "";
    display: block;
    clear: both;
  }
`;
const Image = styled.div`
  width: 55%;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: left;
`;
const List = styled.div`
  width: 20%;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  display: flex;

  div {
    cursor: pointer;
    width: 100%;
    margin-bottom: 20px;
    img {
      width: 100%;
      height: auto;
      border: 1.5px solid ${COLORS.lightgrey};
    }
  }
`;
const MainImage = styled.div`
  width: 60%;
  flex: 5;
  margin-right: 72px;

  img {
    width: 100%;
    height: auto;


    float: right;
  }
`;
const ProductInfo = styled.div`
  width: 45%;
  float: right;
  color: ${COLORS.text};
  position: absolute;
  top: 0;
  right: 0;
`;
const ProductTitle = styled.div`
  font-weight: 700;
  font-size: 28px;
  color: ${COLORS.highlight};
`;
const Status = styled.div`
  font-weight: 500;
  font-size: 13px;
  margin-top: 8px;

  span {
    font-weight: 600;
    text-transform: uppercase;
    color: ${COLORS.primary};
  }
`;
const Row1 = styled.ul`
  margin-top: 8px;
  display: flex;
  padding-inline-start: 0;
  list-style-type: none;
  li {
    margin-right: 40px;
    align-items: flex-end;
    font-weight: 500;
    font-size: 15px;
    display: flex;
    a,
    a:visited,
    a:hover,
    a:active {
      color: inherit;
      cursor: pointer;
      text-decoration: underline;
    }
    ul {
      color: ${COLORS.highlight};
      li {
        margin: 0;
        font-size: 28px;
      }
    }
  }
`;
const Row2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-block-start: 32px;
  div {
    margin-inline-end: 12px;
  }
`;
const Price = styled.div`
  color: ${COLORS.primary};
  font-weight: 700;
  font-size: 28px;
  position: primary;
`;
const OldPrice = styled.div`
  font-weight: 500;
  font-size: 15px;
  color: black;
  text-decoration-line: line-through;
`;
const Percent = styled.div`
  font-weight: 700;
  font-size: 13px;
  padding: 8px 12px;
  background-color: ${COLORS.second};
  border-radius: 20px;
`;
const Wishlist = styled.div`
  color: highligh;
  cursor: pointer;
  margin-inline-start: 12px;
  position: absolute;
  right: 40%;
`;
const Saving = styled.div`
  font-weight: 500;
  font-size: 15px;
  color: black;
  span {
    font-style: italic;
    color: ${COLORS.primary};
  }
`;
const Row3 = styled.div`
  margin-block-start: 32px;
  display: flex;
  align-items: center;
`;
const Quantity = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const QuantityButton = styled.div`
  cursor: pointer;
  transition: 0.4s all;
  &:hover {
    color: ${COLORS.primary};
  }
`;
const AddCart = styled.div`
  flex: 4;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.div`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 44px;
  color: #ffffff;
  background: #5a4c9f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  cursor: pointer;
`;
const Policy = styled.div``;
const ProductView = (props) => {
  let product = props.product;
  const [previewImg, setPreviewImg] = useState(product.image01);
  const [showWishlist, setShowWishlist] = useState(1); //1:whistlist 0: no
  const onClick = (e) => {
    setShowWishlist(e);
  };
  const saving = product.price - product.sale;

  const [quantity, setQuantity] = useState(1);
  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };
  const onInputChange = useCallback((e) => {
    setQuantity(e.target.value);
  }, []);
  console.log(quantity);
  useEffect(() => {
    setPreviewImg(product.image01);
    setQuantity(1);
  }, [product]);
  //   const dispatch = useDispatch();

  //   if (product === undefined)
  //     product = {
  //       title: "",
  //       price: "",
  //       image01: null,
  //       image02: null,
  //       categorySlug: "",
  //       colors: [],
  //       slug: "",
  //       size: [],
  //       description: "",
  //     };

  //   const [descriptionExpand, setDescriptionExpand] = useState(false);

  //   const check = () => {
  //     if (color === undefined) {
  //       alert("Vui lòng chọn màu sắc!");
  //       return false;
  //     }

  //     if (size === undefined) {
  //       alert("Vui lòng chọn kích cỡ!");
  //       return false;
  //     }

  //     return true;
  //   };

  //   const addToCart = () => {
  //     if (check()) {
  //       let newItem = {
  //         slug: product.slug,
  //         color: color,
  //         size: size,
  //         price: product.price,
  //         quantity: quantity,
  //       };
  //       if (dispatch(addItem(newItem))) {
  //         alert("Success");
  //       } else {
  //         alert("Fail");
  //       }
  //     }
  //   };

  //   const goToCart = () => {
  //     if (check()) {
  //       let newItem = {
  //         slug: product.slug,
  //         color: color,
  //         size: size,
  //         price: product.price,
  //         quantity: quantity,
  //       };
  //       if (dispatch(addItem(newItem))) {
  //         dispatch(remove());
  //         props.history.push("/cart");
  //       } else {
  //         alert("Fail");
  //       }
  //     }
  //   };

  return (
    <div>
      <Top>
        <Image>
          <List>
            <div onClick={() => setPreviewImg(product.image01)}>
              <img src={product.image01} alt="" />
            </div>
            <div onClick={() => setPreviewImg(product.image02)}>
              <img src={product.image02} alt="" />
            </div>
            <div onClick={() => setPreviewImg(product.image03)}>
              <img src={product.image03} alt="" />
            </div>
            <div
              style={{ margin: 0 }}
              onClick={() => setPreviewImg(product.image04)}
            >
              <img src={product.image04} alt="" />
            </div>
          </List>
          <div style={{ flex: 0.5 }}></div>
          <MainImage>
            <img src={previewImg} alt="" />
          </MainImage>
        </Image>
        <ProductInfo
        //   className={`product-description ${descriptionExpand ? "expand" : ""}`}
        >
          <ProductTitle>{product.title}</ProductTitle>
          <Status>
            Tình trạng: <span>{product.status}</span>
          </Status>
          <Row1>
            <li>
              <Rate allowHalf disabled defaultValue={product.stars} />
            </li>
            <li>{product.stars} (3)</li>
            <li>
              <a>Viết đánh giá </a>
            </li>
          </Row1>
          <Row2>
            <Price>{product.sale}.000 VNĐ</Price>
            <OldPrice>{product.price}.000 VNĐ</OldPrice>
            <Percent>{product.percent}%</Percent>
            <Wishlist
              onClick={() => onClick(0)}
              style={{ visibility: showWishlist === 0 ? "hidden" : "visible" }}
            >
              <BsHeart size={24}></BsHeart>
            </Wishlist>
            <Wishlist
              onClick={() => onClick(1)}
              style={{
                visibility: showWishlist === 1 ? "hidden" : "visible",
                color: COLORS.primary,
              }}
            >
              <BsHeartFill size={24}></BsHeartFill>
            </Wishlist>
          </Row2>
          <Saving>
            (Tiết kiệm <span>{saving}.000 VNĐ)</span>
          </Saving>
          <Row3>
            <Quantity>
              <QuantityButton onClick={() => updateQuantity("minus")}>
                <AiOutlineMinus size={28} />
              </QuantityButton>
              <Input
                value={quantity}
                size="large"
                style={{ width: 40, fontSize: "20px" }}
                bordered={false}
                onChange={onInputChange}
              ></Input>
              <QuantityButton onClick={() => updateQuantity("plus")}>
                <AiOutlinePlus size={28} />
              </QuantityButton>
            </Quantity>
            <AddCart>
              <Button>Thêm vào giỏ</Button>
            </AddCart>{" "}
            <div style={{ flex: 2 }}></div>
          </Row3>
          <Policy></Policy>
          {/* <div
            className="product-description__content"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div> */}
          {/* <div className="product-description__toggle">
            <Button
              size="sm"
              onClick={() => setDescriptionExpand(!descriptionExpand)}
            >
              {descriptionExpand ? "Thu gọn" : "Xem thêm"}
            </Button>
          </div> */}
        </ProductInfo>
      </Top>
      {/* 
        <div className="product__info__item">
          <Button onClick={() => addToCart()}>thêm vào giỏ</Button>
          <Button onClick={() => goToCart()}>mua ngay</Button>
        </div>
      </div>
      <div
        className={`product-description mobile ${
          descriptionExpand ? "expand" : ""
        }`}
      >
        <div className="product-description__title">Chi tiết sản phẩm</div>
        <div
          className="product-description__content"
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></div>
        <div className="product-description__toggle">
          <Button
            size="sm"
            onClick={() => setDescriptionExpand(!descriptionExpand)}
          >
            {descriptionExpand ? "Thu gọn" : "Xem thêm"}
          </Button>
        </div>
      </div> */}
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object,
};

// export default withRouter(ProductView);
export default ProductView;
