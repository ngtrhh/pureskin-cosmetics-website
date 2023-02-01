import Header from "../components/Header";
import styled from "styled-components";
import { Input, Col, Row, DatePicker, ConfigProvider } from "antd";
import locale from "antd/locale/vi_VN";
import dayjs from "dayjs";
import "dayjs/locale/vi";

const MainFrame = styled.div`
  width: 1024px;
  margin: 60px auto 0px;
  background-color: wheat;
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
  background-color: red;
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
  margin: 40px auto 0;
`;
const Note = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #3c3434;
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
`;
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const SignUp = () => {
  return (
    <div>
      <Header />
      <MainFrame>
        <Title>
          <Heading>Nhập thông tin thành viên</Heading>
          <Label style={{ textAlign: "right" }}>
            <Required /> Vui lòng nhập đầy đủ các mục
          </Label>
        </Title>
        <Line />
        <SignUpArea>
          <Row
            align="middle"
            style={{ display: "flex", width: "100%", marginBottom: "40px" }}
          >
            <Col flex={1}>
              <Label>
                Tên <Required />
              </Label>
            </Col>
            <Col flex={2}>
              <Input.Group>
                <Row gutter={20}>
                  <Col flex={1}>
                    <Input placeholder="Tên" />
                  </Col>
                  <Col flex={1}>
                    <Input placeholder="Họ" />
                  </Col>
                </Row>
              </Input.Group>
            </Col>
          </Row>

          <Row
            align="middle"
            style={{ display: "flex", width: "100%", marginBottom: "40px" }}
          >
            <Col flex={1}>
              <Label>
                Số điện thoại <Required />
              </Label>
            </Col>
            <Col flex={2}>
              <Input placeholder="Vui lòng nhập số điện thoại" />
            </Col>
          </Row>

          <Row
            align="middle"
            style={{ display: "flex", width: "100%", marginBottom: "40px" }}
          >
            <Col flex={1}>
              <Label>
                Địa chỉ Email <Required />
              </Label>
            </Col>
            <Col flex={2}>
              <Input placeholder="Vui lòng nhập địa chỉ Email" />
            </Col>
          </Row>

          <Row
            align="middle"
            style={{ display: "flex", width: "100%", marginBottom: "40px" }}
          >
            <Col flex={1}>
              <Label>
                Ngày sinh <Required />
              </Label>
            </Col>
            <Col flex={2}>
              <ConfigProvider locale={locale}>
                <DatePicker
                  placeholder="Vui lòng chọn ngày sinh"
                  onChange={onChange}
                />
              </ConfigProvider>
            </Col>
          </Row>

          <Row
            align="middle"
            style={{ display: "flex", width: "100%", marginBottom: "40px" }}
          >
            <Col flex={1}>
              <Label>
                Giới tính <Required />
              </Label>
            </Col>
            <Col flex={2}>
              <ConfigProvider locale={locale}>
                <DatePicker
                  placeholder="Vui lòng chọn ngày sinh"
                  onChange={onChange}
                />
              </ConfigProvider>
            </Col>
          </Row>

          <Row
            align="middle"
            style={{ display: "flex", width: "100%", marginBottom: "40px" }}
          >
            <Col flex={1}>
              <Label>
                Mật khẩu <Required />
              </Label>
            </Col>
            <Col flex={2}>
              <ConfigProvider locale={locale}>
                <Input placeholder="Vui lòng nhập 6 - 12 ký tự gồm chữ cái/chữ số"></Input>
                <Note>
                  * Mật khẩu tối thiểu 6 - 12 ký tự gồm chữ cái hoa, chữ cái
                  thường và chữ số
                </Note>
              </ConfigProvider>
            </Col>
          </Row>

          <Row
            align="middle"
            style={{ display: "flex", width: "100%", marginBottom: "40px" }}
          >
            <Col flex={1}>
              <Label>
                Xác nhận mật khẩu <Required />
              </Label>
            </Col>
            <Col flex={2}>
              <ConfigProvider locale={locale}>
                <Input placeholder="Vui lòng nhập lại mật khẩu"></Input>
              </ConfigProvider>
            </Col>
          </Row>
        </SignUpArea>
      </MainFrame>
    </div>
  );
};

export default SignUp;
