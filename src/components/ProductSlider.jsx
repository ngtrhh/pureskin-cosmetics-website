import Card from "./Home/Card";
import { LeftIcon, RightIcon } from "./Icons/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="prev">
      <LeftIcon size={32} onClick={onClick}></LeftIcon>
    </div>
  );
};
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="next">
      <RightIcon size={32} onClick={onClick}></RightIcon>
    </div>
  );
};

const ProductSlider = (props) => {
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
    <div className="product-slider">
      <Slider {...settings}>
        {props.data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
