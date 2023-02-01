import styled from "styled-components";
import Logo from "../components/Logo";
import background from "../images/footer-background.png";
import logoSale from "../images/logoSaleNoti.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { COLORS } from "../constants.jsx";
import { GitHub, Instagram } from "@mui/icons-material";
import { Input, Button } from "antd";

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 710px;
  margin: 40px auto 0px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: bottom left;
`;
const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  padding: 60px 0;
  color: ${COLORS.text};
  font-size: 15px;
`;
const Line = styled.hr`
  margin-top: 60px;
  background-color: ${COLORS.lightgrey};
  box-shadow: 0px 2px 6px #18274b3d;
`;
const Content = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 2;
`;
const Right = styled.div`
  flex: 1;
  text-align: right;
`;
const Columns = styled.div`
  display: flex;
`;
const Column = styled.div`
  margin-right: 160px;
`;
const Row = styled.div`
  margin-top: 60px;
`;
const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 28px;
`;
const List = styled.ul`
  font-size: 15px;
  list-style-type: none;
  padding-inline-start: 0px;
`;

const Item = styled.li`
  margin-top: 12px;
`;
const SocialContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 32px;
`;
const SocialIcon = styled.div`
  margin-left: 32px;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 50%;
  box-shadow: 0px 4px 4px #00000040, 0px 8px 24px 0px #18274b14;
  cursor: pointer;
`;
const Link = styled.a`
  text-decoration: none;
  color: black;
`;

const Copyright = styled.div`
  font-size: 12px;
  font-weight: 300;
  margin: 0px 0px 60px 120px;
`;

function LogoSaleNoti() {
  return <img src={logoSale} style={{ width: "40%", marginTop: "28px" }} />;
}

function BoldText({ children }) {
  return <span style={{ fontWeight: "600" }}>{children}</span>;
}

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <Line />
        <Content>
          <Left>
            <Columns>
              <Column>
                <Title>VỀ PURESKIN</Title>
                <List>
                  <Item>
                    <Link href="">Giới thiệu</Link>
                  </Item>
                  <Item>
                    <Link href="">Liên hệ</Link>
                  </Item>
                  <Item>
                    <Link href="">Tuyển dụng</Link>
                  </Item>
                  <Item>
                    <Link href="">Tin tức</Link>
                  </Item>
                </List>
              </Column>
              <Column Column>
                <Title>CHÍNH SÁCH</Title>
                <List>
                  <Item>
                    <Link href="">Chính sách & quy định chung</Link>
                  </Item>
                  <Item>
                    <Link href="">Chính sách giao hàng & thanh toán</Link>
                  </Item>
                  <Item>
                    <Link href="">Chính sách mua hàng</Link>
                  </Item>
                  <Item>
                    <Link href="">Chính sách trả hàng</Link>
                  </Item>
                </List>
              </Column>
            </Columns>
            <Row>
              <List>
                <Item>
                  <BoldText>Thời gian làm việc:</BoldText> Thứ 2 ~ Thứ 6 09:00 ~
                  17:00 (trừ Thứ 7, Chủ Nhật và ngày lễ)
                </Item>
                <Item>
                  <BoldText>Tư vấn và chăm sóc khách hàng:</BoldText> 012345678
                </Item>
                <Item>
                  <BoldText>Email:</BoldText>{" "}
                  <Link href="">pureskin_cskh@gmail.com</Link>
                </Item>
              </List>
              <Input.Group compact>
                <Input
                  style={{ width: "calc(100% - 640px)", margin: "12px 0px" }}
                  placeholder="Đăng ký Email để nhận thông tin ưu đãi"
                />
                <Button
                  type="primary"
                  style={{ margin: "12px 0px", backgroundColor: "#5A4C9F" }}
                >
                  Đăng ký
                </Button>
              </Input.Group>
            </Row>
          </Left>
          <Right>
            <Title>THEO DÕI PURESKIN TRÊN</Title>
            <SocialContainer>
              <SocialIcon>
                <FacebookRoundedIcon color="primary" sx={{ fontSize: 48 }} />
              </SocialIcon>
              <SocialIcon
                style={{ color: "white", backgroundColor: "#F00073" }}
              >
                <Instagram sx={{ fontSize: 28 }} />
              </SocialIcon>
              <SocialIcon style={{ backgroundColor: "white" }}>
                <GitHub sx={{ fontSize: 44 }} />
              </SocialIcon>
            </SocialContainer>
            <p>
              <BoldText>CÔNG TY TNHH PURESKIN VIỆT NAM </BoldText>
            </p>
            <p style={{ marginTop: "12px" }}>
              123, Đường số 6, Khu phố Linh Trung, Tp.Thủ Đức,
              <br />
              Tp.Hồ Chí Minh, Việt Nam.
            </p>
            <LogoSaleNoti></LogoSaleNoti>
          </Right>
        </Content>
      </Wrapper>
      <Copyright>&#169; 2022 All Rights Reserved</Copyright>
    </Container>
  );
};

export default Footer;
