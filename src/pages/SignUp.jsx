import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Input, DatePicker, Select, ConfigProvider } from "antd";
import locale from "antd/locale/vi_VN";
import "dayjs/locale/vi";
import { COLORS } from "../constants";

const MainFrame = styled.div`
  width: 60%;
  margin: 60px auto 0px;
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${COLORS.highlight};
`;
const Heading = styled.div`
  font-size: 28px;
  font-weight: 700;
  flex: 1;
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
  background-color: #000000;
  box-shadow: 0px 1px 6px -4px #18274b52;
  margin-top: 12px;
`;
const SignUpArea = styled.div`
  width: 720px;
  margin: 40px auto;
`;
const Note = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${COLORS.mediumgray};
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
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const SignUp = () => {
  return (
    <div>
      <Header />
      <MainFrame>
        <Title>
          <Heading>Nhập thông tin thành viên</Heading>
          <Label style={{ textAlign: "right", color: COLORS.mediumgray }}>
            <Required /> Vui lòng nhập đầy đủ các mục
          </Label>
        </Title>
        <Line />
        <SignUpArea>
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
              <Input placeholder="Vui lòng nhập lại mật khẩu" size="large" />
            </Col>
          </Row>
        </SignUpArea>
        <Line
          style={{ background: COLORS.mediumgray, margin: "40px 0 20px" }}
        />{" "}
        <Center>
          <Button>Đăng nhập</Button>
        </Center>
        <Center>
          <SignIn>
            Bạn đã có tài khoản? Đăng nhập <a href="">tại đây</a>
          </SignIn>
        </Center>
      </MainFrame>
      <Footer />
    </div>
  );
};

export default SignUp;
