import Helmet from "../components/Helmet";
import HomeSlider from "../components/Home/HomeSlider";
import Account from "../components/Home/Account";
import Policy from "../components/Home/Policy";
import ProductList from "../components/Home/ProductList";
import ProductSlider from "../components/ProductSlider";
import productData from "../assets/data/products";
import sliderData from "../assets/data/slider";
import Section, { SectionBody, SectionTitle } from "../components/Section";

const Home = () => {
  const suggest = productData.getProducts(8);
  const hotdeal = productData.getProducts(8);
  const newproduct = productData.getProducts(8);

  return (
    <Helmet title="Trang chủ">
      <HomeSlider data={sliderData} />
      <Section>
        <SectionBody>
          <Account />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Gợi ý cho bạn</SectionTitle>
        <ProductSlider data={suggest}></ProductSlider>
        <ProductList data={suggest}></ProductList>
      </Section>
      <Section>
        <SectionTitle>Deal sốc tháng này</SectionTitle>
        <ProductSlider data={hotdeal}></ProductSlider>
        <ProductList data={hotdeal}></ProductList>
      </Section>
      <Section>
        <SectionTitle>Sản phẩm mới</SectionTitle>{" "}
        <ProductSlider data={newproduct}></ProductSlider>
        <ProductList data={newproduct}></ProductList>
      </Section>
      <Section>
        <SectionBody>
          <Policy />
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Home;
