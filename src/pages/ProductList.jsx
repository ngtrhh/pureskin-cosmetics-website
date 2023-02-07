import styled from "styled-components";
import Helmet from "../components/Helmet";
import { COLORS } from "../constants.jsx";
import { Breadcrumb, Select } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import productData from "../assets/data/products";
import Card from "../components/Card";
import Row from "react-bootstrap/Row";
import { useCallback, useEffect, useState } from "react";
import Category from "../components/Category";
import { useParams } from "react-router-dom";

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
const List = styled.div`
  width: 80%;
  float: rigth;
  margin: 0 32px;
  display: flex;
  justify-content: left;
  flex-direction: column;
`;
const SortArea = styled.div`
  justify-content: right;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  align-items: center;
`;
const ProductList = (props) => {
  const { slug } = useParams();
  const productList = productData.getAllProducts();
  const [products, setProducts] = useState(productList);
  //state 1 mặc định
  const [category, setCategory] = useState(1);
  function changeCategory(idCate) {
    //change category when click
    setCategory(idCate);
  }
  const changeProductList = useCallback(() => {
    let temp = productData.getAllProducts();
    if (category === "deal-soc") {
      temp = temp.filter((e) => e.dealSoc === true);
    } else if (category === "duong-da") {
      temp = temp.filter((e) => e.categorySlug === "duong-da");
    } else if (category === "trang-diem") {
      temp = temp.filter((e) => e.categorySlug === "trang-diem");
    } else if (category === "cham-soc-toc") {
      temp = temp.filter((e) => e.categorySlug === "cham-soc-toc");
    } else if (category === "cham-soc-co-the") {
      temp = temp.filter((e) => e.categorySlug === "cham-soc-co-the");
    } else if (category === "khac") {
      temp = temp.filter((e) => e.categorySlug === "khac");
    }
    setProducts(temp);
  }, [category, setCategory]);
  useEffect(() => {
    changeProductList();
  }, [changeProductList]);
  console.log(slug, productList);

  return (
    <Container>
      <Helmet title="Deal sốc"></Helmet>
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
        <div className="title">
          <span>Deal Sốc</span>
        </div>
        <Line />
        <Content>
          <CategorySide>
            <Category category={changeCategory} />
          </CategorySide>

          <List>
            {" "}
            <SortArea>
              <Select
                defaultValue={"Hiển thị theo mặc định"}
                options={[
                  { value: "1", label: "Hiển thị theo mặc định" },
                  { value: "3", label: "Hiển thị theo sản phẩm mới" },
                  { value: "4", label: "Hiển thị theo giá cao nhất" },
                  { value: "5", label: "Hiển thị theo giá thấp nhất" },
                ]}
                size="large"
                style={{ width: "30%" }}
              ></Select>
            </SortArea>
            <div style={{ justifyContent: "space-between" }}>
              <Row
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "100%",
                }}
              >
                {products.map((item) => (
                  <Card key={item.id} item={item} />
                ))}
              </Row>
            </div>
          </List>
        </Content>
      </Body>
    </Container>
  );
};

export default ProductList;
