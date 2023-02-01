import styled from "styled-components";
import { COLORS } from "../constants.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { slider } from "../data.js";

const Container = styled.div`
  width: 80%;
  height: 48vw;
  margin: 40px auto;
`;
const Left = styled.div`
  width: 72px;
  height: 72px;
  background-color: transparent;
  border-radius: 50%;
  color: ${COLORS.lightgrey};
  display: flex;
  justify-content: center;
  align-items: center;
  transform: 0.5s;
  z-index: 5;
  cursor: pointer;

  &:hover {
    color: ${COLORS.mediumgrey};
  }
  position: absolute;
  top: 50%;
  right: -100px;
`;
const Right = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  color: ${COLORS.lightgrey};
  display: flex;
  justify-content: center;
  align-items: center;
  transform: 0.5s;
  z-index: 5;
  cursor: pointer;

  &:hover {
    color: ${COLORS.mediumgrey};
  }
  position: absolute;
  top: 50%;
  left: -100px;
`;
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <Right>
      <BsChevronLeft size={80} onClick={onClick}></BsChevronLeft>
    </Right>
  );
};
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <Left>
      <BsChevronRight size={80} onClick={onClick}></BsChevronRight>
    </Left>
  );
};
const Dot = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 1rem 0;
  position: absolute;
  bottom: 4px;
  list-style-type: none;

  li {
    margin: 0 0.5rem;
    border-radius: 50%;
    width: 12px;
    height: 12px;
  }

  li button {
    background: transparent !important;
    color: transparent !important;
    text-indent: -9999px;
  }

  li button::before {
    background-color: ${COLORS.primary};
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
`;
const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <Dot style={{ margin: "0px" }}>{dots}</Dot>;
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Container>
      <Slider {...settings}>
        {slider.map((item) => (
          <img
            src={item.img}
            style={{ width: "100%", height: "fit-content" }}
          />
        ))}
      </Slider>
    </Container>
  );
};

export default HomeSlider;
