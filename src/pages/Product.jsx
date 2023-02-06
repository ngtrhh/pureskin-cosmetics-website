import styled from "styled-components";
import Helmet from "../components/Helmet";
import Footer from "../components/Footer/Footer";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { COLORS } from "../constants.jsx";
import productData from "../assets/data/products";
import { useParams } from "react-router-dom";
import ProductSlider from "../components/ProductSlider";
import ProductView from "../components/ProductView";

const Body = styled.div`
  width: 80%;
  margin: auto;
  /* background-color: #0000ff4e; */
`;
const BreadcrumbContainer = styled.div`
  margin-top: 20px;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 40px;
  border: 1px solid ${COLORS.primary};
`;
const Heading = styled.div`
  width: 1228px;
  margin: auto;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 28px;
`;
const Product = (props) => {
  const { slug } = useParams();
  const product = productData.getProductBySlug(slug);
  const list = productData.getAllProducts(8);
  console.log(slug, product);
  return (
    <div>
      <Helmet title={product.title}></Helmet>
      <Body>
        <BreadcrumbContainer>
          <Breadcrumb>
            <Breadcrumb.Item>
              <HomeOutlined />
              <a href="/">Trang chủ</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Sản phẩm</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Dưỡng da</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{product.title}</Breadcrumb.Item>
          </Breadcrumb>
        </BreadcrumbContainer>
        <ProductView product={product} />
      </Body>
      <Heading>Có thể bạn sẽ thích</Heading>
      <ProductSlider list={list}></ProductSlider>
      <Footer />
    </div>
  );
};

export default Product;
