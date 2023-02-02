import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { productImages } from "../assets/data";
import { COLORS } from "../constants.jsx";
import productData from "../assets/products";

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <Right>
      <BsChevronLeft size={32} onClick={onClick}></BsChevronLeft>
    </Right>
  );
};
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <Left>
      <BsChevronRight size={32} onClick={onClick}></BsChevronRight>
    </Left>
  );
};

const Body = styled.div`
  width: 80%;
  margin: auto;
  background-color: #0000ff4e;
`;
const BreadcrumbContainer = styled.div`
  margin-top: 20px;
`;
const ImageProduct = styled.div`
  width: 55%;
  margin-top: 86px;
  display: flex;
  align-items: center;
  background-color: blue;
`;
const Left = styled.div`
  width: 72px;
  height: 72px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 2px 2px 8px 0px #00000040;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: 0.5s;
  z-index: 5;
  cursor: pointer;

  &:hover {
    background: #efc8e2;
    color: white;
  }
  position: absolute;
  top: 50%;
  right: -8rem;
`;
const Right = styled.div`
  width: 72px;
  height: 72px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 2px 2px 8px 0px #00000040;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: 0.5s;
  z-index: 5;
  cursor: pointer;

  &:hover {
    background: #efc8e2;
    color: white;
  }
  top: 50%;
  position: absolute;
  left: -8rem;
`;
const MainImage = styled.div`
  padding-right: 72px;
  width: 60%;
  float: right;
  background-color: whitesmoke;
  height: 90%;
`;
const DotContainer = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  list-style-type: none;
  position: absolute;
  left: -8rem;
  bottom: 1rem;
  border-radius: 0;
  li {
    margin: 1rem 0;
    width: 20%;
  }

  li button {
    background: transparent !important;
    color: transparent !important;
    text-indent: -9999px;
  }

  li button::before {
    background-color: ${COLORS.primary};
  }
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 40px;
  border: 1px solid ${COLORS.primary};
`;
const ImageSlider = styled.img`
  width: 100%;
  height: auto;
  border: 1.5px solid ${COLORS.lightgrey};
`;
const Product = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    customPaging: (i) => {
      const element = productImages.find((el, id) => el.id === i + 1);
      return (
        <div style={{ margin: "0 30rem" }}>
          <ImageSlider src={element.img} />
        </div>
      );
    },
    appendDots: (dots) => <DotContainer>{dots}</DotContainer>,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  //   const product = productData.getProductBySlug(props.match.params.slug);
  return (
    <div>
      <Body>
        <BreadcrumbContainer>
          <Breadcrumb>
            <Breadcrumb.Item>
              <HomeOutlined />
              <a href="/">Trang chủ</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Sản phẩm</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Dưỡng da</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              Mặt Nạ Ngủ Laneige Dưỡng Ẩm & Tăng Khả Năng Tự Vệ Da 70ml
            </Breadcrumb.Item>
          </Breadcrumb>
        </BreadcrumbContainer>
        <ImageProduct>
          <div style={{ display: "block", width: "20%" }}></div>
          <MainImage>
            <Slider {...settings}>
              {productImages.map((item) => (
                <Image src={item.img} />
              ))}
            </Slider>
          </MainImage>
        </ImageProduct>
      </Body>
      <Footer />
    </div>
  );
};

export default Product;
