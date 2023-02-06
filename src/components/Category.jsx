import styled from "styled-components";
import categoryList from "../assets/data/category";
import { COLORS } from "../constants.jsx";
import { Link } from "react-router-dom";

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
const Line = styled.hr`
  background-color: ${COLORS.mediumgrey};
  box-shadow: 0px 1px 6px -4px #18274b52;
  margin-top: 12px;
`;

const Category = (props) => {
  const onClick = (e) => {
    props.category(e);
    console.log(e);
  };
  return (
    <CategoryList>
      {categoryList.getAllCategories().map((item, index) => (
        <Link
          style={{ textDecoration: "none" }}
          to={`/product-list/${item.id}`}
          onClick={() => onClick(item.categorySlug)}
          key={index}
        >
          <li>
            {item.display}
            <Line />
          </li>
        </Link>
      ))}
    </CategoryList>
  );
};

export default Category;
