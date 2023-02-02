import styled from "styled-components";
import Footer from "../components/Footer";
import { COLORS } from "../constants";
import { grey } from "@mui/material/colors";
import { Divider, FormControl, Input, InputLabel } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { Instagram } from "@mui/icons-material";
import { FcGoogle } from "react-icons/fc";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Title from "../components/Title";

const Container = styled.div``;
const Body = styled.div`
  width: 60%;
  margin: auto;
`;
const Line = styled.hr`
  background-color: #000000;
  box-shadow: 0px 1px 6px -4px #18274b52;
  margin-top: 12px;
`;
const Main = styled.div`
  width: 540px;
  margin: 28px auto;
`;
const Row = styled.div`
  margin-bottom: 28px;
`;
const ForgotPass = styled.div`
  font-size: 15px;
  font-weight: 600;
  text-align: right;
  margin-top: 20px;
  text-decoration: underline;
  a {
    text-decoration: none;
    color: ${COLORS.text};
  }
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
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
const SignUp = styled.div`
  color: black;
  font-size: 16px;
  font-weight: 500;
  a {
    font-weight: 700;
    color: #5a4c9f;
    text-decoration: underline;
  }
  a,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
  }
`;
const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 32px auto;
  width: 40%;
`;
const SocialIcon = styled.div`
  width: 52px;
  height: 52px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 50%;
  box-shadow: 0px 4px 4px #00000040, 0px 8px 24px 0px #18274b14;
  cursor: pointer;
`;
const BreadcrumbContainer = styled.div`
  margin-top: 20px;
`;

const SignIn = () => {
  return (
    <Container>
      <Body>
        <BreadcrumbContainer style={{ visibility: "hidden" }}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <HomeOutlined />
              <a href="/">Trang chủ</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </BreadcrumbContainer>
        <Title value="Đăng nhập" />
        <Line />
        <Main>
          <Row>
            <FormControl fullWidth variant="standard">
              <InputLabel htmlFor="standard" sx={{ color: grey[600] }}>
                Số điện thoại/Địa chỉ Email
              </InputLabel>
              <Input />
            </FormControl>
          </Row>
          <Row style={{ marginBottom: 0 }}>
            <FormControl fullWidth variant="standard">
              <InputLabel htmlFor="standard" sx={{ color: grey[600] }}>
                Mật khẩu
              </InputLabel>
              <Input type="password" />
            </FormControl>
          </Row>
          <ForgotPass>
            <a href="#">Quên mật khẩu?</a>
          </ForgotPass>
          <Center style={{ marginTop: "48px" }}>
            <Button>Đăng nhập</Button>
          </Center>
          <Divider plain>
            <span style={{ color: COLORS.mediumgrey }}>HOẶC</span>
          </Divider>
          <SocialContainer>
            <SocialIcon>
              <FacebookRoundedIcon color="primary" sx={{ fontSize: 62 }} />
            </SocialIcon>
            <SocialIcon style={{ color: "white", backgroundColor: "#F00073" }}>
              <Instagram sx={{ fontSize: 38 }} />
            </SocialIcon>
            <SocialIcon style={{ backgroundColor: "white" }}>
              <FcGoogle size={40} />
            </SocialIcon>
          </SocialContainer>
          <Center>
            <SignUp>
              Bạn chưa có tài khoản ? Đăng ký <a href="/signup">tại đây</a>
            </SignUp>
          </Center>
        </Main>
      </Body>
      <Footer />
    </Container>
  );
};

export default SignIn;
