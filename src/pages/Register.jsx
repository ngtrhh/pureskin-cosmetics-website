import styled from "styled-components";
import Helmet from "../components/Helmet";
import Title from "../components/Title";
import Footer from "../components/Footer";
import { COLORS } from "../constants";
import { Input, DatePicker, Select, ConfigProvider, Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import locale from "antd/locale/vi_VN";
import "dayjs/locale/vi";

const Body = styled.div`
  width: 60%;
  margin: auto;
`;
const Label = styled.div`
  font-size: 15px;
  font-weight: 500;
  flex: 1;
  color: #3c3434;
`;
function Required() {
  return <b style={{ color: "#ee1414" }}>*</b>;
}

const Line = styled.hr`
  background-color: ${COLORS.text};
  box-shadow: 0px 1px 6px -4px #18274b52;
  margin-top: 12px;
`;
const Main = styled.div`
  width: 720px;
  margin: 40px auto;
`;
const Note = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${COLORS.mediumgrey};
  margin-left: 4px;
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
const SignIn = styled.div`
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
const Row = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;
  align-items: center;
`;
const Col = styled.div`
  justify-content: left;
  flex: 2;
`;
const BreadcrumbContainer = styled.div`
  margin-top: 20px;
`;
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Register = () => {
  return (
    <div>
      <Helmet title="Đăng ký"></Helmet>
      <Body>
        <BreadcrumbContainer style={{ visibility: "hidden" }}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <HomeOutlined />
              <a href="/">Trang chủ</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </BreadcrumbContainer>
        <Title value="Đăng ký" />
        {/* <Title>
          <Heading>Nhập thông tin thành viên</Heading>
          <Label style={{ textAlign: "right", color: COLORS.mediumgrey }}>
            <Required /> Vui lòng nhập đầy đủ các mục
          </Label>
        </Title> */}
        <Line />
        <Main>
          <Row>
            <Label>
              Tên <Required />
            </Label>
            <Col>
              <Row style={{ margin: "0" }}>
                <div style={{ marginRight: "20px", flex: "1" }}>
                  <Input placeholder="Tên" size="large" />
                </div>
                <div style={{ flex: "1" }}>
                  <Input placeholder="Họ" size="large" />
                </div>
              </Row>
              <Input.Group></Input.Group>
            </Col>
          </Row>
          <Row>
            <Label>
              Số điện thoại <Required />
            </Label>
            <Col>
              <Input placeholder="Vui lòng nhập số điện thoại" size="large" />
            </Col>
          </Row>
          <Row>
            <Label>
              Địa chỉ Email <Required />
            </Label>
            <Col>
              <Input placeholder="Vui lòng nhập địa chỉ Email" size="large" />
            </Col>
          </Row>
          <Row>
            <Label>
              Ngày sinh <Required />
            </Label>
            <Col>
              <ConfigProvider locale={locale}>
                <DatePicker
                  placeholder="Vui lòng chọn ngày sinh"
                  onChange={onChange}
                  style={{ width: "100%" }}
                  size="large"
                />
              </ConfigProvider>
            </Col>
          </Row>
          <Row>
            <Label>
              Giới tính <Required />
            </Label>
            <Col>
              <Select
                placeholder="Vui lòng chọn giới tính"
                style={{ width: "100%" }}
                onChange={handleChange}
                options={[
                  { value: "female", label: "Nữ" },
                  { value: "male", label: "Dành cho Nam" },
                ]}
                size="large"
              />
            </Col>
          </Row>
          <Row>
            <Label>
              Mật khẩu <Required />
            </Label>
            <Col>
              <Input
                placeholder="Vui lòng nhập 6 - 12 ký tự gồm chữ cái/chữ số"
                size="large"
                type="password"
              />
              <Note>
                * Mật khẩu tối thiểu 6 - 12 ký tự gồm chữ cái hoa, chữ cái
                thường và chữ số
              </Note>
            </Col>
          </Row>
          <Row>
            <Label>
              Xác nhận mật khẩu <Required />
            </Label>
            <Col>
              <Input
                placeholder="Vui lòng nhập lại mật khẩu"
                size="large"
                type="password"
              />
            </Col>
          </Row>
        </Main>
        <Line
          style={{ background: COLORS.mediumgrey, margin: "40px 0 20px" }}
        />{" "}
        <Center>
          <Button>Đăng ký</Button>
        </Center>
        <Center>
          <SignIn>
            Bạn đã có tài khoản? Đăng nhập <a href="/login">tại đây</a>
          </SignIn>
        </Center>
      </Body>
      <Footer />
    </div>
  );
};

export default Register;
