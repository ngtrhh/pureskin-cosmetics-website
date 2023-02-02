import styled from "styled-components";
import HomeSlider from "../components/HomeSlider";
import HomeProducts from "../components/HomeProducts";
import Footer from "../components/Footer";
import personIcon from "../images/icon-person.png";
import { BsTruck } from "react-icons/bs";
import { AiOutlineSwap } from "react-icons/ai";
import { RiShieldStarLine } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import { COLORS } from "../constants.jsx";

const Container = styled.div`
  background-color: ${COLORS.BG};
`;
const AccountRow = styled.div`
  box-sizing: border-box;
  background-color: #efc8e2;
  height: 160px;
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AccountIcon = styled.div`
  color: #5a4c9f;
  margin-right: 20px;
`;
const AccountContent = styled.div`
  font-size: 16px;
  font-weight: 600px;
  color: #3c3434;
`;
const ButtonContainer = styled.div`
  margin: 4px 8px;
  position: relative;
  display: flex;
`;
const OutlineButton = styled.div`
  border: 1px solid #5a4c9f;
  color: #282626;
  flex: 1;
  cursor: pointer;
  padding: 8px 24px;
  height: fit-content;
  width: fit-content;
  border-radius: 100px;
  text-align: center;
  position: relative;
  transition: 0.4s all;

  a {
    text-decoration: none;
  }
  
  a,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
  }
  
  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${COLORS.primary};
    color: white;
  }
`;
const FillButton = styled.div`
  cursor: pointer;
  padding: 8px 24px;
  height: fit-content;
  width: fit-content;
  background-color: #5a4c9f;
  color: white;
  border-radius: 100px;
  flex: 1;
  text-align: center;
  position: relative;
  transition: 0.4s all;

  a,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
  }
  
  a {
    text-decoration: none;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: white;
    color: ${COLORS.primary};
    border: 1px solid #5a4c9f;
  }
`;
const ButtonRow = styled.div`
  display: flex;
  margin: 12px;
  justify-content: center;
`;
const Heading = styled.div`
  width: 1228px;
  margin: auto;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 28px;
`;
const PolicyRow = styled.div`
  box-sizing: border-box;
  background-color: #efc8e2;
  height: 160px;
  width: 100%;
  margin-top: 4px;
  display: flex;
  justify-content: space-between;
`;
const Policy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff66;
  height: 100%;
  width: 25%;
`;
const PolicyIcon = styled.div`
  margin: 0 20px;
`;
const PolicyInfo = styled.div``;
const PolicyTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
`;
const PolicyDesc = styled.div`
  font-size: 15px;
  font-weight: 400;
`;
const Home = () => {
  return (
    <Container>
      <HomeSlider />
      <AccountRow>
        <AccountIcon>
          <img src={personIcon} />
        </AccountIcon>
        <AccountContent>
          <p>Hãy đăng nhập để nhận thêm nhiều ưu đãi nhé!</p>
          <ButtonRow>
            <ButtonContainer>
              <OutlineButton>
                <a href="/signup">Đăng ký</a>
              </OutlineButton>
            </ButtonContainer>
            <ButtonContainer>
              <FillButton>
                <a href="/login">Đăng nhập</a>
              </FillButton>
            </ButtonContainer>
          </ButtonRow>
        </AccountContent>
      </AccountRow>
      <Heading>Gợi ý cho bạn</Heading>
      <HomeProducts />
      <Heading>Deal sốc tháng này</Heading>
      <HomeProducts />
      <Heading>Sản phẩm mới</Heading>
      <HomeProducts />
      <PolicyRow>
        <Policy>
          <PolicyIcon>
            <BsTruck size={80}></BsTruck>
          </PolicyIcon>
          <PolicyInfo>
            <PolicyTitle>Giao hàng miễn phí</PolicyTitle>
            <PolicyDesc>Cho đơn hàng từ 300k</PolicyDesc>
          </PolicyInfo>
        </Policy>

        <Policy style={{ backgroundColor: "transparent" }}>
          <PolicyIcon>
            <AiOutlineSwap size={80}></AiOutlineSwap>
          </PolicyIcon>
          <PolicyInfo>
            <PolicyTitle>Đổi trả hàng</PolicyTitle>
            <PolicyDesc>Trong 3 ngày đầu tiên</PolicyDesc>
          </PolicyInfo>
        </Policy>

        <Policy>
          <PolicyIcon>
            <RiShieldStarLine size={80}></RiShieldStarLine>
          </PolicyIcon>
          <PolicyInfo>
            <PolicyTitle>Hàng chính hãng</PolicyTitle>
            <PolicyDesc>Cam kết chất lượng</PolicyDesc>
          </PolicyInfo>
        </Policy>

        <Policy style={{ backgroundColor: "transparent" }}>
          <PolicyIcon>
            <MdSupportAgent size={80}></MdSupportAgent>
          </PolicyIcon>
          <PolicyInfo>
            <PolicyTitle>Chăm sóc khách hàng</PolicyTitle>
            <PolicyDesc>Tư vấn 24/24</PolicyDesc>
          </PolicyInfo>
        </Policy>
      </PolicyRow>
      <Footer />
    </Container>
  );
};

export default Home;
