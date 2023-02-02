import HomeCard from "./HomeCard";
import styled from "styled-components";
import { suggestProducts } from "../assets/data";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Container = styled.div`
  box-sizing: border-box;
  width: 72%;
  height: 500px;
  padding: 0px 40px;
  margin: 24px auto 0;
  position: relative;
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
const HomeProducts = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Container>
      <Slider {...settings}>
        {suggestProducts.map((item) => (
          <HomeCard item={item} key={item.id} />
        ))}
      </Slider>
    </Container>
  );
};

export default HomeProducts;
