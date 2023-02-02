import styled from "styled-components";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { IoBookmarkSharp } from "react-icons/io5";
import { Rate } from "antd";
import { useState } from "react";

const ButtonContainer = styled.div`
  opacity: 0;
  transition: 0.4s;
  position: absolute;
  bottom: -20px;
  left: 12px;
  right: 12px;
  margin: 4px;
`;
const Button = styled.div`
  margin: auto;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  color: #282626;
  font-weight: 600;
  border: 1px solid #5a4c9f;
  padding: 10px 24px;
  border-radius: 100px;
  transition: color 300ms ease-in-out;
  z-index: 10;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background-color: #5a4c9f;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 300ms ease-in-out;
    border-radius: 100px;
  }

  &:hover::before,
  &:focus::before {
    transform: scaleX(1);
    border-radius: 100px;
  }

  &:hover,
  &:focus {
    color: white;
    border-radius: 100px;
  }
`;
const CardContainer = styled.div`
  background-color: white;
  padding: 10px;
  width: 250px;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  position: relative;

  &:hover ${ButtonContainer} {
    transition-timing-function: ease-out;
    transform: translateY(-110%);
    opacity: 1;
  }
  &:hover {
    box-shadow: 2px 2px 10px 0px #00000066;
  }
`;
const Container = styled.div`
  box-sizing: border-box;
  width: fit-content;
  height: fit-content;
  margin: 0;
  padding: 10px;
`;
const SaleContainer = styled.div`
  position: absolute;
  right: 8px;
  top: -10px;
  color: #efc8e2;
`;
const ImageContainer = styled.div`
  width: 100%;
  max-height: 180px;
  position: relative;
`;
const Image = styled.img`
  max-height: 180px;
  margin: auto;
`;
const Wishlist = styled.div`
  position: absolute;
  bottom: 4px;
  right: 8px;
  color: #7e7777;
  cursor: pointer;
`;
const Body = styled.div`
  width: 100%;
  text-align: left;
  margin-top: 20px;
`;
const Title = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 12px;
`;
const Price = styled.div`
  margin-bottom: 4px;
`;
const Rating = styled.div`
  color: #fbbc05;
  justify-content: space-between;
`;
const Percent = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #4e2e68;
  position: absolute;
  top: 20px;
  right: 30%;
`;
const NewPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #4e2e68;
  margin-bottom: 4px;
`;
const OldPrice = styled.div`
  font-size: 14px;
  text-decoration-line: line-through;
  font-weight: 500;
  color: #3c3434;
`;
const Card = ({ item }) => {
  const [showWishlist, setShowWishlist] = useState(1); //1:whistlist 0: no
  const onClick = (e) => {
    setShowWishlist(e);
  };
  return (
    <Container>
      <CardContainer>
        <ImageContainer>
          <Image src={item.image01}></Image>
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
              color: "#5A4C9F",
            }}
          >
            <BsHeartFill size={24}></BsHeartFill>
          </Wishlist>
        </ImageContainer>

        <Body>
          <Title>
            <span>{item.title.substring(0, 60)}</span>
          </Title>
          <Price>
            <OldPrice>{item.price}.000 VNĐ</OldPrice>
            <NewPrice>{item.sale}.000 VNĐ</NewPrice>
          </Price>
          <Rating>
            <Rate allowHalf disabled defaultValue={item.stars} />
          </Rating>
        </Body>

        <ButtonContainer>
          <Button>Mua hàng</Button>
        </ButtonContainer>
        <SaleContainer>
          <IoBookmarkSharp size={72}></IoBookmarkSharp>
          <Percent>{item.percent}%</Percent>
        </SaleContainer>
      </CardContainer>
    </Container>
  );
};

export default Card;
