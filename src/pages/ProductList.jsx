import styled from "styled-components";
import Footer from "../components/Footer";
import { COLORS } from "../constants.jsx";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Title from "../components/Title";
import productData from "../assets/products";
import HomeProductCard from "../components/HomeProductCard";
import Card from "../components/Card";
import Row from "react-bootstrap/Row";
const Container = styled.div``;
const Body = styled.div`
  width: 80%;
  margin: auto;
`;
const BreadcrumbContainer = styled.div`
  margin-top: 20px;
`;
const Line = styled.hr`
  background-color: ${COLORS.mediumgrey};
  box-shadow: 0px 1px 6px -4px #18274b52;
  margin-top: 12px;
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 0;
`;
const CategorySide = styled.div`
  width: 20%;
  float: left;
`;
const CategoryList = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
  padding: 0 16px;

  li {
    margin: 12px 0;
    text-transform: uppercase;
    color: ${COLORS.text};
    display: block;
    cursor: pointer;
    position: relative;
    transition: 0.4s all;
    padding: 12px 4px;

    &:hover {
      color: ${COLORS.highlight};
      transform: scale(1.1);
      transition: transform 0.3s ease;
    }
  }
`;
const List = styled.div`
  width: 80%;
  float: rigth;
  margin: 0 32px;
  justify-content: space-between;
  display: flex;
  justify-content: right;
`;

const ProductList = () => {
  return (
    <Container>
      <Body>
        <BreadcrumbContainer>
          <Breadcrumb>
            <Breadcrumb.Item>
              <HomeOutlined />
              <a href="/">Trang chủ</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="/product-list">Sản phẩm</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Deal sốc</Breadcrumb.Item>
          </Breadcrumb>
        </BreadcrumbContainer>
        <Title value="Deal sốc" />
        <Line />
        <Content>
          <CategorySide>
            <CategoryList>
              <li>
                Deal sốc
                <Line />
              </li>
              <li>
                Dưỡng da <Line />
              </li>
              <li>
                Trang điểm <Line />
              </li>
              <li>
                Chăm sóc tóc <Line />
              </li>
              <li>
                Chăm sóc cơ thể <Line />
              </li>
              <li>
                Khác <Line />
              </li>
            </CategoryList>
          </CategorySide>
          <List>
            <Row style={{ display: "flex", flexWrap: "wrap" }}>
              {productData.getAllProducts().map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </Row>
          </List>
        </Content>
      </Body>
      <Footer />
    </Container>
  );
};

export default ProductList;
